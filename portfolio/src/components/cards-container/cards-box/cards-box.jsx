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
    "description": ""
	},
  {
    "id": "2",
		"title": "Robbie Lens",
		"cover": robbie,
    "img": robbie,
    "description": ""
	},
  {
    "id": "3",
		"title": "Booki",
		"cover": booki,
    "img": booki,
    "description": ""
  },
  {
    "id": "4",
		"title": "Sophie Bluel",
		"cover": sophie,
    "img": sophie,
    "description": ""
  },
  {
    "id": "5",
		"title": "Qwenta",
		"cover": qwenta,
    "img": qwenta,
    "description": ""
  },
  {
    "id": "6",
		"title": "Nina Carducci",
		"cover": nina,
    "img": nina,
    "description": ""
  },
  {
    "id": "7",
		"title": "Kasa",
		"cover": kasa,
    "img": kasa,
    "description": ""
  },
  {
    "id": "8",
		"title": "Mon Vieux Grimoire",
		"cover": "..",
    "img": "..",
    "description": ""
  },
  {
    "id": "9",
		"title": "Mon Portfolio",
		"cover": "..",
    "img": "..",
    "description": ""
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