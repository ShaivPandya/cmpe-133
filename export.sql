-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: cmpe133
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Businesses`
--

DROP TABLE IF EXISTS `Businesses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Businesses` (
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Businesses`
--

LOCK TABLES `Businesses` WRITE;
/*!40000 ALTER TABLE `Businesses` DISABLE KEYS */;
INSERT INTO `Businesses` VALUES ('Apple','example2'),('Google','example1');
/*!40000 ALTER TABLE `Businesses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `JobApplications`
--

DROP TABLE IF EXISTS `JobApplications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `JobApplications` (
  `idApplication` int NOT NULL AUTO_INCREMENT,
  `idJobs` int NOT NULL,
  `email` varchar(50) NOT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `DOB` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `Phone` varchar(45) DEFAULT NULL,
  `Resume` blob,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idApplication`),
  KEY `email_idx` (`email`),
  KEY `idJobs_idx` (`idJobs`),
  CONSTRAINT `email` FOREIGN KEY (`email`) REFERENCES `Users` (`email`) ON DELETE CASCADE,
  CONSTRAINT `idJobs` FOREIGN KEY (`idJobs`) REFERENCES `Jobs` (`idJobs`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `JobApplications`
--

LOCK TABLES `JobApplications` WRITE;
/*!40000 ALTER TABLE `JobApplications` DISABLE KEYS */;
INSERT INTO `JobApplications` VALUES (1,1,'johndoe@gmail.com','John Doe','01/01/1999','123 Street','(123) 456-7890',NULL,'Under review'),(3,2,'johndoe@gmail.com','John Doe','01/01/1999','123 Street','(123) 456-7890',NULL,'Rejected'),(4,1,'jasonsmith@gmail.com','Jason Smith','05/29/2000','21 Jump Street','(222) 482-3920',NULL,'Interview');
/*!40000 ALTER TABLE `JobApplications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Jobs`
--

DROP TABLE IF EXISTS `Jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Jobs` (
  `idJobs` int NOT NULL AUTO_INCREMENT,
  `business` varchar(45) DEFAULT NULL,
  `jobTitle` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `description` longtext,
  `positions` int DEFAULT NULL,
  PRIMARY KEY (`idJobs`),
  KEY `business_idx` (`business`),
  CONSTRAINT `business` FOREIGN KEY (`business`) REFERENCES `Businesses` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Jobs`
--

LOCK TABLES `Jobs` WRITE;
/*!40000 ALTER TABLE `Jobs` DISABLE KEYS */;
INSERT INTO `Jobs` VALUES (1,'Google','Software Engineer','Mountain View, CA','0-1 Years of experience working with HTML, CSS and JavaScript',3),(2,'Google','Accountant','Mountain View, CA','0-1 years of experience doing math and things of that nature',1),(3,'Apple','Full-stack software engineer','Sunnyvale, CA','2+ years of experience with full-stack development',1),(4,'Google','CTO','Mountain View, CA','No experience required',1),(10,'Google','Janitor','New York City, NY','$1/hr',100);
/*!40000 ALTER TABLE `Jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `email` varchar(50) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(45) NOT NULL,
  `resume` blob,
  `phone` varchar(45) DEFAULT NULL,
  `dob` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES ('','','',NULL,'',''),('example@example.com','Bob Jones','pass',NULL,NULL,NULL),('jasonsmith@gmail.com','Jason Smith','example',NULL,'(222) 482-3920','05/29/2000'),('johndoe@gmail.com','John Doe','password123',NULL,'(123) 456-7890',NULL),('shaiv@gmail.com','Shaiv','pass123',NULL,NULL,NULL);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-14  9:34:21
