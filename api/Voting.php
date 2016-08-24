<?php
class Voting
{
    const SERVER_NAME= "localhost";
    const USER_NAME= "root";
    const PASSWORD = "";
    const DB_NAME = "voting_db";

    const TOGGLE_VOTE_UP='TOGGLE_VOTE_UP';
    const TOGGLE_VOTE_DOWN='TOGGLE_VOTE_DOWN';

    protected $conn;
    
    public function __construct(){
        // Create connection
        $this->conn = new mysqli(Voting::SERVER_NAME, Voting::USER_NAME, Voting::PASSWORD, Voting::DB_NAME);
        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        } 
    }

    public function getData(){
        $sql = "SELECT * FROM `votes`";
        $result = $this->conn->query($sql);

        if ($result->num_rows > 0) {
            $output=array();
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $output[]=array(
                    'id'=>(int)$row["id"],
                    'imageUrl'=>$row["image_url"],
                    'name'=>$row["name"],
                    'isVoted'=>(int)$row["is_voted"],
                );
            }

            return $output;
        } else {
            return null;
        }
    }

    public function doVote($id,$voteType){
        $sql = "SELECT `is_voted` FROM `votes` WHERE `id`=$id";
        $result = $this->conn->query($sql);
        $isVoted=1;

        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $isVoted=(int)$row["is_voted"];
            }
        }

        $isVoted=$this->getCalculatedVotedValue($voteType,$isVoted);

        $sql = "UPDATE `votes` SET `is_voted`=$isVoted WHERE `id`=$id";

        if ($this->conn->query($sql) === TRUE) {
            return $isVoted;
        } else {
            die ("Error updating record: " . $this->conn->error);
        }
    }

    public function getCalculatedVotedValue($votingType,$isVoted){
        if ($votingType==Voting::TOGGLE_VOTE_UP){
            if ($isVoted==1){
                $isVoted=0;
            }else{
                $isVoted=1;
            }
        }else{
            if ($isVoted==-1){
                $isVoted=0;
            }else{
                $isVoted=-1;
            }
        }

        return $isVoted;
    }
}
