import React from 'react';
import './cards-box.scss';
import Card from './../cards/cards';
import toDoList from './../../../assets/ToDoList.png';
import robbie from './../../../assets/RobbieLens.png'
import booki from '../../../assets/Booki.png';
import sophie from '../../../assets/SophieBluel.png';
import qwenta from '../../../assets/Qwenta.png';
import nina from './../../../assets/NinaCarducci.png';
import kasa from './../../../assets/Kasa.png';


const Cards = [
	{
    "id": "1",
		"title": "To Do List",
		"cover": toDoList,
    "img": toDoList,
    "description": "Création d'une to do list en Javascript"
	},
  {
    "id": "2",
		"title": "Robbie Lens",
		"cover": robbie,
    "img": robbie,
    "description": "Création du site vitrine d'une photographe en HTML & CSS"
	},
  {
    "id": "3",
		"title": "Booki",
		"cover": booki,
    "img": booki,
    "description": "Création de la page d'accueil d'une agence de voyage avec HTML & CSS"
  },
  {
    "id": "4",
		"title": "Sophie Bluel",
		"cover": sophie,
    "img": sophie,
    "description": "Création d'une page web dynamique avec JavaScript"
  },
  {
    "id": "5",
		"title": "Qwenta",
		"cover": qwenta,
    "img": qwenta,
    "description": "Planification du développement d'un site client"
  },
  {
    "id": "6",
		"title": "Nina Carducci",
		"cover": nina,
    "img": nina,
    "description": "Débogage et optimisation d'un site de photographe"
  },
  {
    "id": "7",
		"title": "Kasa",
		"cover": kasa,
    "img": kasa,
    "description": "Création d'une application web de location immobilière avec React"
  },
  {
    "id": "8",
		"title": "Mon Vieux Grimoire",
		"cover": "..",
    "img": "..",
    "description": "Développement du back-end d'un site de notation de livres"
  },
  {
    "id": "9",
		"title": "Mon Portfolio",
		"cover": "..",
    "img": "..",
    "description": "Création de mon portfolio"
  }
]

const CardsBox = () => {
  return (
    <div className='sectionCards'>
      {Cards.map((data) =>
        <Card key={data.id} cardImg={data.cover} cardTitle={data.title} modalImg={data.img} modalTitle={data.title} modalText={data.description}/>
      )}
    </div>
  );
};

export default CardsBox