<html>
    <body>
        <div id="score-bar">
        </div>
    </body>
</html>


<script src="node_modules/jquery/dist/jquery.js"></script>
<script src="index.js"></script>

<?php

require_once 'core/init.php';

$dbUser = new DB();
$userExists = $dbUser->get("users", ["u_name", "=", isset($_POST['name']) ? $_POST['name'] : ""]);
$db = new DB();

$scoreIdMax = $db->getMax("scores", ["s_id", "!=", 0]);
$scoreIdCount = get_object_vars($scoreIdMax->_results[0]);
$newScoreId = intval($scoreIdCount['MAX(s_id)'])+1;


if (isset($userExists->_results)) {
    if(count($userExists->_results)) {
        $userIdHold = get_object_vars($userExists->_results[0]);
        $userId = intval($userIdHold['u_id']);
        $userName = $userIdHold['u_name'];
        $insert = $db->insert('scores',[
            's_id' => $newScoreId,
            's_userid' => $userId,
            's_value' => 0
        ]);
    } else {
        $userIdMax = $db->getMax("users", ["u_id", "!=", 0]);
        $userIdCount = get_object_vars($userIdMax->_results[0]);
        $newUserId = intval($userIdCount['MAX(u_id)'])+1;
        $userName = $_POST['name'];

        $insert = $db->insert('users',[
            'u_name' => $_POST['name'],
            'u_scoreid' => $newScoreId
        ]);

        $insert = $db->insert('scores',[
            's_id' => $newScoreId,
            's_userid' => $newUserId,
            's_value' => 0
        ]);
        $test =2;
    }
}

?>
<script>
    postData = "<?php echo $userName; ?>"
 </script>


<script>main()</script>