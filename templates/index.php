<form method="post">
    <select name="who">
        <option value="0">Начальник отдела</option>
        <option value="1">Ведущий специалист</option>
        <option value="2">Специалист</option>
        <option value="3">Техник</option>
        <option value="4">Лаборант</option>
        <option value="5">Научник сотрудник</option>
        <option value="6">Старший научный сотрудник</option>
        <option value="7">Преподаватель</option>
    </select>

    <select name="exp">
        <option value="0">Нет опыта</option>
        <option value="1">от 1 до 3</option>
        <option value="2">от 3 до 5</option>
        <option value="3">более 5</option>
    </select><br />

    <input type="checkbox" name="certs[]" value="cisco" />Cisco<br />
    <input type="checkbox" name="certs[]" value="infowatch" />Инфовотч<br />
    <input type="checkbox" name="certs[]" value="kaspersky" />Касперский<br />
    <input type="checkbox" name="certs[]" value="infotechs" />Инфотекс<br />
    <input type="checkbox" name="certs[]" value="international" />Международный<br />
    <button type="submit" name="send">Поиск</button>
</form>
<table border="1">
    <caption>Пользователи</caption>
    <tr>
        <th>Имя</th>
        <th>Дата рождения</th>
        <th>Стаж</th>
        <th>Сертификаты</th>
    </tr>


<?php


if(isset($_POST['send'])) {
    $who = $_POST['who'];
    $certs = $_POST['certs'] ?? null;
    $exp = $_POST['exp'];

    $query = "SELECT * FROM users WHERE ";

    //sql injection must whitelist values in $cert array
    $was_who = false;
    $was_exp = false;

    if($who != '' && isset($who)) {
        $query .= "who = $who ";
        $was_who = true;
    }


    if($exp != '' && isset($exp)) {
        if($was_who == true) {
            $query .= 'AND ';
            $was_who = false;
            $was_exp = true;
        }
        if($exp == '0') {
            $query .= 'exp = 0 ';
        }
        if($exp == '1') {
            $query .= 'exp >= 1 AND exp <= 3 ';
        }
        if($exp == '2') {
            $query .= 'exp >= 3 AND exp <= 5 ';
        }
        if($exp == '3') {
            $query .= 'exp >= 5 ';
        }
    }

    if($certs != null ) {
        if(count($certs) != 0) {
            if($was_who == true || $was_exp == true) {
                $query .= 'AND ';
            }
            for ($i = 0; $i < count($certs); $i++) {
                if ($i < count($certs) - 1) {
                    $query .= "$certs[$i] = 1 AND ";
                } else {
                    $query .= "{$certs[$i]} = 1";
                }
            }

        }

    }

    $data = DB::run($query, []);
    $rows = $data->fetchAll();
    if (count($rows) == 0) {
        echo 'Никого нет';
    }
    foreach ($rows as $row){
        $row_exp = 0;


        if ($row['exp'] == 0) {
            $row_exp = 'Нет опыта';
        }
        if ($row['exp'] == 1) {
            $row_exp =  'от 1 до 3 лет';
        }
        if ($row['exp'] == 2) {
            $row_exp =  'от 3 до 5 лет';
        }
        if ($row['exp'] == 3) {
            $row_exp =  'более 5';
        }

        $certificate_result = '';

        if($row['cisco'] == 1) {
            $certificate_result .= 'Cisco<br />';
        } if($row['infowatch'] == 1) {
            $certificate_result .=  'Infowatch<br />';
        } if($row['kaspersky'] == 1) {
            $certificate_result .=  'Касперский<br />';
        } if($row['infotechs'] == 1) {
            $certificate_result .=  'Инфотекс<br />';
        } if($row['international'] == 1) {
            $certificate_result .=  'Международный<br />';
        }

        echo "<tr><td>{$row['name']}</td><td>{$row['dob']}</td><td>$row_exp</td><td>$certificate_result</td></tr>";

    }

}
echo '</table>';
class DB
{
    protected static $instance = null;

    private static $dsn = 'mysql:dbname=dvfudb;host=localhost';
    private static $user = 'root';
    private static $password = 'root';

    public function __construct()
    {
    }

    public static function __callStatic($method, $args)
    {
        return call_user_func_array(array(self::instance(), $method), $args);
    }

    public static function instance()
    {
        if (self::$instance === null) {
            self::$instance = new PDO(self::$dsn, self::$user, self::$password, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
        }
        return self::$instance;
    }

    public static function run($sql, $args = [])
    {
        if (!$args) {
            return self::instance()->query($sql);
        }
        $stmt = self::instance()->prepare($sql);
        $stmt->execute($args);
        return $stmt;
    }

    public function __clone()
    {
    }
}