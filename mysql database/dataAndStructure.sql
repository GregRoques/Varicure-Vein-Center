-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: varicure
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `personalData`
--

DROP TABLE IF EXISTS `personalData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `personalData` (
  `email` varchar(75) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `date` varchar(7) NOT NULL,
  `checked` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personalData`
--

LOCK TABLES `personalData` WRITE;
/*!40000 ALTER TABLE `personalData` DISABLE KEYS */;
INSERT INTO `personalData` VALUES ('adsf@df','adsf','0','2019-09',NULL),('af@dfa','afdfaasdf','0','2019-09',NULL),('archEnemy@marvel.com','Green Goblin','0','2019-09',NULL),('callie@cat.com','Callie','0','2019-09',NULL),('Cat@MeowMix.com','Lil Nacheaux','333-333-3333','2019-09',NULL),('cock@balls.com','Dick Face','504-330-3832','2019-09',NULL),('df@df','asdf','0','2019-09',NULL),('Email@email.com','Full Name','333-333-3333','2019-09',NULL),('greg@gregroques.com','Greg Roques','504-220-3832','2020-01',NULL),('Mother@Fucker.com','Mother Fucker','0','2019-09',NULL),('twelveinches@ld.com','LD','0','2019-09',NULL);
/*!40000 ALTER TABLE `personalData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reviews`
--

DROP TABLE IF EXISTS `Reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `englishReview` varchar(100) NOT NULL,
  `spanishReview` varchar(100) NOT NULL,
  `name` varchar(45) NOT NULL,
  `url` varchar(500) DEFAULT NULL,
  `social` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reviews`
--

LOCK TABLES `Reviews` WRITE;
/*!40000 ALTER TABLE `Reviews` DISABLE KEYS */;
INSERT INTO `Reviews` VALUES (1,'Doctor Ruben is by far the best in disappearing veins.','\nEl doctor Ruben es, con mucho, el mejor en la desaparición de las venas.','Karen R.','https://www.yelp.com/biz/varicure-vein-center-miami-2?hrid=uqps8OA-ENMaOTI3VQ3ZuQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)','yelp'),(2,'If you are  looking for a doctor who really disappears the varicose veins, he\'s here. ','\nSi está buscando un médico que realmente desaparezca las venas varicosas, él está aquí.','Rosi S.','https://www.yelp.com/biz/varicure-vein-center-miami-2?hrid=dhHIlSW5ubXMfrOSGawJdw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)','yelp'),(3,'I love my legs since the first visit.','\nAmo mis piernas desde la primera visita.','Rose S.','https://www.yelp.com/biz/varicure-vein-center-miami-2?hrid=dhHIlSW5ubXMfrOSGawJdw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)','yelp'),(4,'The issues with my veins are in the past.','\nLos problemas con mis venas están en el pasado.','Juan L.',NULL,'Google');
/*!40000 ALTER TABLE `Reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `email` varchar(50) NOT NULL,
  `userId` varchar(25) NOT NULL,
  `hash` varchar(500) NOT NULL,
  `idToken` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('greg@gregroques.com','Greg','$2a$10$ETHecC60P9ROdutx37pYVe7v9XBIZoc2E25WI1T2Jf9F/9nrdOzV.','8bfn3k3jXifukFevDkWKZBL86QaqoWFlhYQ4MU83V2asgbkpgR');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-16 12:16:26
