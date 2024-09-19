<?php
  $servername = "localhost";
  $username = "username";
  $password = "password";
  $dbname = "dramatics";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " + $conn->connect_error);
  }

  // Query the database
  $sql = "SELECT * FROM events";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      echo "<li>" . $row["name"] . " - " . $row["date"] . "</li>";
    }
  } else {
    echo "0 results";
  }

  $conn->close();
?>