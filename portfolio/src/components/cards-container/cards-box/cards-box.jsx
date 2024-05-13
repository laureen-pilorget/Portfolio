import React from 'react';
import Card from './../cards/cards';
import './cards-box.scss';
import toDoList from './../../../assets/ToDoList.png';
import robbie from './../../../assets/RobbieLens.png'
import booki from '../../../assets/Booki.png';
import sophie from '../../../assets/SophieBluel.png';
import qwenta from '../../../assets/Qwenta.png';
import nina from './../../../assets/NinaCarducci.png';
import kasa from './../../../assets/Kasa.png';


const DataBase = [
	{
		"title": "To Do List",
		"cover": toDoList
	},
    {
		"title": "Robbie Lens",
		"cover": robbie
	},
    {
		"title": "Booki",
		"cover": booki
    },
    {
		"title": "Sophie Bluel",
		"cover": sophie
    },
    {
		"title": "Qwenta",
		"cover": qwenta
    },
    {
		"title": "Nina Carducci",
		"cover": nina
    },
    {
		"title": "Kasa",
		"cover": kasa
    },
    {
		"title": "Mon Vieux Grimoire",
		"cover": ".."
    },
    {
		"title": "Mon Portfolio",
		"cover": ".."
    }
]


const CardsBox = () => {
    return(
        <div className='sectionCards'>
            {/* On parcourt le fichier JSON pour retourner l'ID correspondant */}
            {DataBase.map((data) =>
                // Pour le bon ID, on retourne l'image et le titre qui lui sont assignés
                // <Card cardImg={data.cover} cardTitle={data.title}/>
                <Card cardImg={data.cover} cardTitle={data.title}/>
                )}
        </div>
    )
}

export default CardsBox