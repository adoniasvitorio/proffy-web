import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponiveis.">
            <form id="search-teachers">
            <Select 
                   name="subject" 
                   label="Matéria" 
                   options={[
                       {value: 'Algoritmos', label: 'Algoritmos'},
                       {value: 'Lógica', label: 'Lógica'},
                       {value: 'Estrutura de dados', label: 'Estrutura de dados'},
                       {value: 'Sistemas Operacionais', label: 'Sistemas Operacionais'},
                       {value: 'Banco de dados', label: 'Banco de dados'},
                       {value: 'UX & UI', label: 'UX & UI'},
                       {value: 'Desenvolvimento Frontend', label: 'Desenvolvimento Frontend'},
                       {value: 'Desenvolvimento Mobile', label: 'Desenvolvimento Mobile'},
                       {value: 'Desenvolvimento Backend', label: 'Desenvolvimento Backend'},
                   ]}
                   />
                
                <Select 
                   name="week_day" 
                   label="Dia da semana" 
                   options={[
                       {value: '0', label: 'Domingo'},
                       {value: '1', label: 'Segunda-feira'},
                       {value: '2', label: 'Terça-feira'},
                       {value: '3', label: 'Quarta-feira'},
                       {value: '4', label: 'Quinta-feira'},
                       {value: '5', label: 'Sexta-feira'},
                       {value: '6', label: 'Sábado'},
                   ]}
                   />
                <Input type="time" name="time" label="Hora" />
            </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;
