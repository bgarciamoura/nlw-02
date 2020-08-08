import React from "react";
import PageHeader from "../../components/PageHeader";

import './style.css';

import iconWhatsApp from "../../assets/images/icons/whatsapp.svg";
import TeacherItem from "../../components/TeacherItem";

const TeacherList = () => {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" name="subject" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" name="week_day" id="week_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" name="time" id="time" />
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem
                    photoPath="https://avatars2.githubusercontent.com/u/15913576?s=460&u=c7650f2f1545d351f583b85974bdc1f6138ee87a&v=4"
                    photoAlt="Bruno Garcia"
                    teacherName="Bruno Garcia"
                    subject="Javascript"
                    presentation="Apaixonado por Javascript e ReactJS."
                    resume="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo non neque saepe qui nam distinctio ullam tenetur ratione labore, libero cupiditate dolorum, quam sit recusandae laudantium possimus autem provident."
                    price={60.50}

                />
                <TeacherItem
                    photoPath="https://avatars2.githubusercontent.com/u/22601978?s=460&u=4ef4328d281f34dc2212e0c871d6917dcfde86d9&v=4"
                    photoAlt="Lucas Flaquer"
                    teacherName="Lucas Flaquer"
                    subject="PHP"
                    presentation="Louco do PHP e do Laravel."
                    resume="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo non neque saepe qui nam distinctio ullam tenetur ratione labore, libero cupiditate dolorum, quam sit recusandae laudantium possimus autem provident."
                    price={30}

                />
            </main>
        </div>
    );
}

export default TeacherList;