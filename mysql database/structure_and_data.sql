-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: localhost    Database: Vericure
-- ------------------------------------------------------
-- Server version	8.0.16

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
-- Table structure for table `about`
--

DROP TABLE IF EXISTS `about`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `about` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `language` varchar(1) NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  `answer` varchar(999) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about`
--

LOCK TABLES `about` WRITE;
/*!40000 ALTER TABLE `about` DISABLE KEYS */;
INSERT INTO `about` VALUES (1,'e','What Sets Us Apart?','ALL examinations and ALL treatments are personally performed by Dr. Ruben Gurvich, a licensed medical doctor–<b><i>not by nurses, assistants or other practitioners.</b></i><br/><br/>\nIt is a known fact that treatment results are proportional to the skill and expertise of the medical professional performing them. Dr. Gurvich has been treating vein disorders for 25 years, and is a postgraduate Alumni of Baylor College of Medicine in Houston, Texas and the University of Miami Medical School. ',NULL),(2,'e','Does the treatment require surgery?','Varicure Vein Center specializes in the treatment of varicose and spider veins <b>WITHOUT SURGERY</b>. We use the most advanced technology, with foam sclerotherapy for the larger veins and microsclerotherapy for the spider veins. <br/><br/>\nAbnormal and unsightly veins are injected with a medication called sclerosant. ',NULL),(3,'e','Is the treatment painful?','The treatment is virtually pain free for most of our patients, because <b>WE DO NOT USE THE SALINE SOLUTION</b> which is known to be painful. We only use an F.D.A. approved medication that causes reduced irritation and less discomfort. ',NULL),(4,'e','Can all types of veins be treated without surgery?','Almost always. However your doctor will inform you in the rare instances that other procedures are necessary. ',NULL),(5,'e','Are laser treatments effective for spider veins?','Laser treatments can be painful, don\'t always work, sometimes result in scaring, and the treated veins tend to grow back quickly. For these reasons we don\'t recommend them. <br/><br/>\n\nMost experienced vein doctors agree that sclerotherapy is the \"Gold Standard\" for the treatment of uncomplicated varicose and spider veins. ',NULL),(6,'e','Do I need an ultrasound?','An ultrasound (sonogram) is a diagnostic tool that is not always needed. \nMany cases of uncomplicated varicose and spider veins can be diagnosed without the additional expense of this test. <br/><br/>\nAt Varicure Vein Center we strive to keep the cost of the treatments affordable and will only order this expensive test in specific cases, where we believe that the additional information will guarantee a better outcome. \nAII treatment plans are tailored for your particular situation, using the least invasive and most cost effective technology. ',NULL),(7,'e','What is the recovery time?','Since there are no bulky dressings or painful downtime, you can continue most of your normal activities. However, you should try to avoid heavy exercise and swimming on the day of the treatment. ',NULL),(8,'e','Will the Veins return?','When treated property most veins will not return. However, as vein abnormalities are mostly hereditary, some people will develop new vein issues in the future. ',NULL),(9,'e','What happens to the circulation after the treatment?','Varicose and spider veins are not necessary for normal circulation, therefore, it is possible to eliminate these \"bad veins\". Consequently, blood will circulate more effectively through the remaining healthy veins. ',NULL),(10,'s','','El consultorio médico “Varicure Vein Center” es una clínica con muchos años de experiencia en el tratamiento de problemas relacionados con las venas varicosas y venas tipo araña.<br/><br/>\n\nA continuación vamos a presentar información general y preguntas frecuentes que ayudan a entender el tema de las venas anormales.',NULL),(11,'s','¿Cual es la diferencia entre Varicure Vein Center y otras clínicas?','Todas las evaluaciones y todos los tratamientos son hechos personalmente por el Dr. Ruben Gurvich, médico con licencia en los Estados Unidos, con más de 25 años de experiencia en el tratamiento de problemas relacionados a las venas varicosas.\n\n<br>EN VARICURE VEIN CENTER NO PERMITIMOS QUE ENFERMERAS, ASISTENTES U OTROS TÉCNICOS EFECTÚEN NINGÚN TRATAMIENTO.</b>\n\nEs un hecho indisputable que los mejores resultados se obtienen cuando un médico con experiencia y destreza, hace personalmente los tratamientos.<br/><br/>\n\nEl Dr. Gurvich  hizo estudios de postgrado en el Colegio Médico Baylor en Houston, Texas y en la Escuela de Medicina de la Universidad de Miami, además es bilingüe y habla Español.',NULL),(12,'s','¿En que consiste el tratamiento sin cirugía? ','Varicure Vein Center se especializa en tratamientos que no requieren cirugía. Utilizando tecnología avanzada, las venas varicosas grandes se tratan con espuma esclerosante, derivada de medicamentos aprobados por la F.D.A.. Las arañas vasculares se tratan con micro esclerosis.',NULL),(13,'s','¿Es doloroso el tratamiento? ','Para la mayoría de los pacientes el tratamiento es virtualmente sin dolor, debido a que NUNCA USAMOS AGUA SALINA que causa mucho dolor. Siempre utilizamos un medicamento aprobado por la F.D.A. que causa poca irritación y muy poca molestia.',NULL),(14,'s','¿Pueden inyectarse venas de cualquier tipo?','Casi siempre si. Sin embargo en algunos casos muy específicos el médico puede recomendar otros procedimientos.',NULL),(15,'s','¿Que tan efectivos son los tratamientos con láser para las venas tipo araña?','Los tratamientos con láser generalmente son dolorosos, pueden causar cicatrices y muchas venas regresan en poco tiempo. Por estas razones no lo recomendamos.<br/><br/>\n\nLa mayoría de los médicos especialistas en venas están de acuerdo que la escleroterapia es el “estándar de de oro” y hoy en día es el mejor tratamiento para este tipo de venas.',NULL),(16,'s','¿Se necesita tener una prueba de ultrasonido?','El ultrasonido (sonograma) es un examen que no siempre es necesario.\nMuchos casos de varices, no complicadas, y venas arañas, se pueden diagnosticar sin el costo adicional de esta prueba.<br/><br/>\n\nEn Varicure Vein Center siempre tratamos de reducir el costo de los tratamientos y solamente ordenamos este examen, en casos selectos, cuando creemos que esta información adicional permitirá tener mejores resultados.\n\nTodos los planes de tratamiento son individualizados, siempre tomamos en cuenta las necesidades del paciente y recomendamos la tecnología más económica y menos invasiva.',NULL),(17,'s','¿Cuanto tarda la recuperación y debo de tener reposo? ','El reposo en cama no es necesario, puede continuar con sus actividades normales. \nLa única restricción es evitar el ejercicio pesado y la natación el día del tratamiento.\n',NULL),(18,'s','¿Como va a circular la sangre si se eliminan las venas varicosas?','Las varices son una carga para el sistema circulatorio. Cuando se elimina el reflujo causado por las “venas malas”, el flujo sanguíneo mejora en las venas sanas y la circulación es más eficiente.',NULL),(19,'s','¿Cuando vuelven a salir las venas?','Con un tratamiento apropiado, la mayoría de las venas no regresan, pero siempre hay que tomar en cuenta la predisposición genética y el hecho que algunas personas pueden desarrollar otras venas en el futuro.',NULL);
/*!40000 ALTER TABLE `about` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `faq` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `answer` varchar(999) NOT NULL,
  `language` varchar(1) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
INSERT INTO `faq` VALUES (1,'What are Varicose Veins ?','Varicose veins are enlarged and unsightly abnormal veins, caused by a weakness in the walls of the veins, and sometimes defective valves cause the veins to enlarge or \"bulge\". ','e',NULL),(2,'What are Spider Veins?','Spider veins are tiny red or purple blood vessels or capillaries that expand in size and become visible on the surface of the skin. Sometimes varicose veins will \"feed\" the spider veins.','e',NULL),(3,'What causes Varicose and Spider Veins?','About 40% of the population suffers from vein problems, the majority of whom are woman. While family history is a strong predictor of vein issues (genetic predisposition), certain occupations that required prolonged standing or sitting, as well as pregnancy, can aggravate the condition. <br/> <br/>The most frequent location of varicose and spider veins is on the legs, but unsightly veins may also appear on the nose, cheeks or breasts. ','e',NULL),(4,'How serious are these issues?','ln the early stages varicose veins are not always painful, some people may feel \'heaviness\' or have swelling of the legs. However, more advanced cases may result in painful ankle ulcers, staining of the skin and bleeding. <br/><br/>  Varicose and spider veins are not always unhealthy but they are always unsightly. ','e',NULL),(5,'Will insurance cover the procedure?','The final determination of whether or not a procedure will be covered lies with the insurance company and not with the doctor. Every insurance plan is different, but more often than not, insurance company will deny coverage stating it is a cosmetic problem.  We do not mislead our patient with false or dubious promises of insurance coverage. <br/><br/>We strongly advise all the patients to call their insurance company and find out their true coverage. ','e',NULL),(6,'¿Que son las venas varicosas?','Las venas varicosas son venas con apariencia deformada, alargadas, ensanchadas o  “abultada”. <br/><br/>\nGeneralmente el problema es causado por una debilidad de las válvulas y estructuras internas de las venas grandes; Estas venas  grandes están conectadas y “alimentan” a las venas de menor tamaño y más superficiales.','s',NULL),(7,'¿Que son las venas tipo araña?','Las venas tipo araña, también conocidas como arañas vasculares, son pequeños vasos sanguíneos o capilares rojos o púrpura que se expanden y son visibles en la superficie de la piel. Muchas veces las venas varicosas “alimentan” y causan las arañas vasculares.','s',NULL),(8,'¿Que causa las venas varicosas y las venas tipo araña? ','Alrededor del 40% de la población tiene varices, la mayoría son mujeres, y frecuentemente, pero no siempre, existe historia familiar de este problema (predisposición genética). Algunas ocupaciones que requieren poco movimiento y estar mucho tiempo de pie o sentados, pueden agravar la condición. El embarazo también puede precipitarlo.','s',NULL),(9,'¿Que tan serios son estos problemas?','En un principio las venas varicosas no causan muchas molestias o dolor, aunque algunos pacientes se quejan de “pesantes” o “hinchazón “ de las piernas. <br/><br/>\nHay que tomar en cuenta que con el tiempo la enfermedad progresa y en algunos casos puede resultar en úlceras dolorosas en los tobillos, manchas de la piel y sangrados. <br/><br/>\n\nLas venas varicosas y las arañas vasculares no siempre son un problema serio para la salud,  pero siempre son feas y antiestéticas.','s',NULL),(10,'¿Cual es la cobertura del seguro médico?','La decisión final de cobertura está en manos de la compañía de seguros, no del médico. Cada plan de seguros es distinto y con frecuencia las aseguradoras niegan el pago, ya que consideran el tratamiento un problema cosmético.<br/><br/>\nNo queremos confundir a nuestros pacientes con promesas falsas de cobertura médica y recomendamos que obtengan información directa de su compañía de seguros.','s',NULL);
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

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
  PRIMARY KEY (`email`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personalData`
--

LOCK TABLES `personalData` WRITE;
/*!40000 ALTER TABLE `personalData` DISABLE KEYS */;
INSERT INTO `personalData` VALUES ('adsf@df','adsf','0','2019-09'),('af@dfa','afdfaasdf','0','2019-09'),('archEnemy@marvel.com','Green Goblin','0','2019-09'),('callie@cat.com','Callie','0','2019-09'),('Cat@MeowMix.com','Lil Nacheaux','333-333-3333','2019-09'),('cock@balls.com','Dick Face','504-330-3832','2019-09'),('df@df','asdf','0','2019-09'),('Email@email.com','Full Name','333-333-3333','2019-09'),('greg@gregroques.com','Greg Roques','504-220-3832','2019-09'),('Mother@Fucker.com','Mother Fucker','0','2019-09'),('twelveinches@ld.com','LD','0','2019-09');
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

-- Dump completed on 2019-12-22 13:53:34
