<?php
/**
 * Created by PhpStorm.
 * User: Wai Phyo
 * Date: 10/07/2016
 * Time: 10:43 PM
 */
require_once("Voting.php");

$objVoting=new Voting();
$output=$objVoting->getData();

echo json_encode($output);
die();