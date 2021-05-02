-- MariaDB dump 10.19  Distrib 10.4.18-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: db_crud
-- ------------------------------------------------------
-- Server version	10.4.18-MariaDB-1:10.4.18+maria~bionic-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `db_crud`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `db_crud` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_crud`;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualizacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Administrador','admin','ee2ec3cc66427bb422894495068222a8','pereiramatin@gmail.com','2021-04-24 11:02:56',NULL),(3,'Maxi Torres','userprueba','ee2ec3cc66427bb422894495068222a8','matu14kun@gmail.com','2021-04-26 15:50:36',NULL),(10,'Matias Ramirez','Matias_14','4297f44b13955235245b2497399d7a93','matti@gmail.com','2021-04-29 20:04:23',NULL),(12,'Mario Lopez','UserDePrueba','4297f44b13955235245b2497399d7a93','mario@lopez.com.ar','2021-05-02 17:27:16',NULL),(13,'Stampy Mail','stampy','4297f44b13955235245b2497399d7a93','stampy@gmail.com','2021-05-02 17:28:01',NULL),(14,'Ruperto Marangoni','rupertito','4297f44b13955235245b2497399d7a93','asdasd@gmail.com','2021-05-02 17:28:50',NULL),(15,'Juan Lopez','pruebita','4297f44b13955235245b2497399d7a93','asda@gmail.com','2021-05-02 18:51:08',NULL),(16,'Juan Perez','pruebita2','4297f44b13955235245b2497399d7a93','mat@gmail.com','2021-05-02 18:52:54',NULL),(17,'Lopez Mario','prueba','4297f44b13955235245b2497399d7a93','A@gmail.com','2021-05-02 18:54:32',NULL),(20,'Clon Alberto','clon','4297f44b13955235245b2497399d7a93','clon@gmail.com','2021-05-02 19:06:19',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-02 19:47:21
