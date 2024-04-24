import React from 'react';
import Card from './../cards/cards';
import './cards-box.scss';
import toDoList from './../../../assets/ToDoList.png';
// import DataBase from './../../../db.json';


// const DataBase = [
// 	{
// 		"title": "To Do List",
// 		"cover": "/Users/kevinc/Documents/Formation dev/Formation/P8/Portfolio/Portfolio/src/assets/ToDoList.png",
// 		"description": ""
// 	},
//     {
// 		"title": "Robbie Lens",
// 		"cover": "",
// 		"description": ""
// 	},
//     {
// 		"title": "Booki",
// 		"cover": "",
// 		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."
// 	},
//     {
// 		"title": "Sophie Bluel",
// 		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
// 		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."
// 	},
//     {
// 		"title": "Qwenta",
// 		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
// 		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."
// 	},{
// 		"title": "Nina Carducci",
// 		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
// 		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."
// 	},
//     {
// 		"title": "Kasa",
// 		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
// 		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."
// 	},
//     {
// 		"title": "Mon Vieux Grimoire",
// 		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
// 		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."
// 	},
//     {
// 		"title": "Mon Portfolio",
// 		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
// 		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."
// 	}
// ]


// const CardsBox = () => {
//     return(
//         <div className='sectionCards'>
//             {/* On parcourt le fichier JSON pour retourner l'ID correspondant */}
//             {DataBase.map((data) =>
//                 // Pour le bon ID, on retourne l'image et le titre qui lui sont assignés
//                 // <Card cardImg={data.cover} cardTitle={data.title}/>
//                 <Card cardImg={data.cover} cardTitle={data.title}/>
//                 )}
//         </div>
//     )
// }

// export default CardsBox