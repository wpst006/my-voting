<?php
/**
 * Created by PhpStorm.
 * User: Wai Phyo
 * Date: 22/08/2016
 * Time: 11:59 AM
 */
require_once("Voting.php");

$json = file_get_contents('php://input');
$data = json_decode($json);

$objVoting=new Voting();
$output=$objVoting->doVote($data->id,$data->type);

echo json_encode($output);
die();