<?php




	$param1  = $_GET['param1'];

		  $url    = "https://gateway.pinata.cloud/ipfs/QmPMUqJXg9wMcDKG5jQRbA92mQfEYQWx8q6gsRa96Vm7Qv/".$param1.".json";

			$ch = curl_init(); 
			curl_setopt($ch, CURLOPT_URL,$url);
						curl_setopt($ch, CURLOPT_HTTPGET, 1);
			curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
			// curl_setopt($ch, CURLOPT_CONNECTTIMEOUT ,1);
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);

curl_setopt($ch, CURLOPT_TIMEOUT, 999999999999999);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
			curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Accept: application/json'));
			$result = curl_exec($ch);
			//var_dump($result);
			 // echo $result;
			 			 if (curl_errno($ch)) {
    $error_msg = curl_error($ch);
    // var_dump($error_msg);
}
			curl_close($ch);
?>