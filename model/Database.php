<?php
    class Database {

        public function __construct() {

            require('../env/variables.php');
            
            $this->con = new PDO(
                'mysql:host='.HOST.';'.'dbname='.DB,
                USER,
                PASSWORD
            );
        }

        public function registerUser($nombre, $apellido, $correo, $clave) {

            $response = [
                'status' => null,
                'message' => null,
                'url' => null
            ];

            try {
                
                $sql = "INSERT INTO usuarios (nombre, apellido, correo, clave) VALUES (:nombre, :apellido, :correo, :clave)";
                $stm = $this->con->prepare($sql);
                $stm->bindParam(':nombre', $nombre, PDO::PARAM_STR);
                $stm->bindParam(':apellido', $apellido, PDO::PARAM_STR);
                $stm->bindParam(':correo', $correo, PDO::PARAM_STR);
                $stm->bindParam(':clave', $clave, PDO::PARAM_STR);
                $stm->execute();

                $response['status'] = 200;
                $response['message'] = 'Registro exitoso';
                $response['url'] = '../index.html';
            }
            catch (Exception $e) {
                
                $response['status'] = 500;
                $response['message'] = 'El usuario ya existe';
            }

            return $response;
        }

        public function login($correo, $clave) {
            
            $sql = "SELECT * FROM usuarios WHERE correo LIKE :correo";
            $stm = $this->con->prepare($sql);
            $stm->bindParam(':correo', $correo, PDO::PARAM_STR);
            $stm->execute();
            $data = $stm->fetch();
            
            $response = [
                'status' => null,
                'message' => null,
                'session' => null,
                'url' => null,
                'id' => null,
                'nombre' => null
            ];

            if($data == false || password_verify($clave, $data['clave']) == false) {
                
                $response['status'] = 500;
                $response['message'] = 'Credenciales incorrectas';
            }
            else {

                $response['status'] = 200;
                $response['id'] = $data['id'];
                $response['url'] = 'view/home.html';
                $response['session'] = true;
                $response['nombre'] = $data['nombre']." ".$data['apellido'];
            }
            
            return $response;
        }

        public function uploadFile($nombre, $temp, $id) {

            if (!file_exists('../upload')) {
                mkdir('../upload', 0777, true);
            }
            
            move_uploaded_file($temp, '../upload/'.$nombre);

            $sql = 'INSERT INTO archivos (id_usuario, documento) VALUES (:id, :documento)';
            $stm= $this->con->prepare($sql);
            $stm->bindParam(':id', $id, PDO::PARAM_INT);
            $stm->bindParam(':documento', $nombre, PDO::PARAM_STR);
            $stm->execute();

            return [
                'status' => 200,
                'message' => 'El archivo se subio exitosamente',
                'url' => './upload.html'
            ];
        }

        public function loadAllFiles($id) {
            
            $sql = "SELECT id, documento FROM archivos WHERE id_usuario LIKE :id";
            $stm = $this->con->prepare($sql);
            $stm->bindParam(':id', $id, PDO::PARAM_INT);
            $stm->execute();
            $data = $stm->fetchAll();

            return [
                'status' => 200,
                'response' => $data
            ];
        }

        public function deleteFile($id) {
            
            $this->remove($id);
            
            $sql = "DELETE FROM archivos WHERE id LIKE :id";
            $stm = $this->con->prepare($sql);
            $stm->bindParam(':id', $id, PDO::PARAM_INT);
            $stm->execute();

            return [
                'status' => 200,
                '$respuesta' => 'El archivo se elimino exitosamente'
            ];
        }

        private function remove($id) {

            $sql = "SELECT documento FROM archivos WHERE id LIKE :id";
            $stm = $this->con->prepare($sql);
            $stm->bindParam(':id', $id, PDO::PARAM_INT);
            $stm->execute();
            $data = $stm->fetch();

            unlink('../upload/'.$data['documento']);
        }

        public function firstEightFiles($id) {

            $sql = "SELECT id, documento FROM archivos WHERE id_usuario LIKE :id LIMIT 8";
            $stm = $this->con->prepare($sql);
            $stm->bindParam(':id', $id, PDO::PARAM_INT);
            $stm->execute();
            $data = $stm->fetchAll();

            return [
                'status' => 200,
                'response' => $data
            ];
        }

        public function updateFile($nombre, $temp, $id) {
            
            $this->remove($id);
            move_uploaded_file($temp, '../upload/'.$nombre);
            
            $sql = "UPDATE archivos SET documento = :nombre WHERE id = :id";
            $stm = $this->con->prepare($sql);
            $stm->bindParam(':nombre', $nombre, PDO::PARAM_STR);
            $stm->bindParam(':id', $id, PDO::PARAM_INT);
            $stm->execute();

            return [
                'status' => 200,
                'message' => 'Atualización realizada con exito',
                'url' => './update.html'
            ];
        }
    }
?>