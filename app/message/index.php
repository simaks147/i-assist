<?
	if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

        $data["name"] = strip_tags($_POST["name"]);
		$data["tel"] = strip_tags($_POST["tel"]);
		$data["txt"] = strip_tags($_POST["txt"]);
		$data["type"] = strip_tags($_POST["type"]);
		$data["city"] = strip_tags($_POST["city"]);
		$data["to"] = base64_decode(strip_tags($_POST["to"]));

		if ($data["tel"] != "") {

			$to = $data["to"];
			$subject = "Новая заявка с сайта I-Assist ".$data["city"];
			$message = "Имя: ".$data["name"]."<br>\r\nТелефон: ".$data["tel"]."<br>\r\nОткуда: ".$data["type"]."<br><br>\rСообщение: ".$data["txt"];
			$headers = "From: I-Assist ".$data["city"]." <robot@i-assist.ru>\r\nContent-type: text/html; charset=UTF-8\r\n";
			
			mail ($to, $subject, $message, $headers);
			
			
			require_once "./lib/db.php";

			$host = "localhost";
			$user = "cc28207_operator";
			$password = "nL5tz1tn";
			$base = "cc28207_operator";

			$db = new Db($host, $user, $password, $base);
			$db->insert($data);

			echo 1;
		} 
		else {
			echo 0;
		}
	}
?>