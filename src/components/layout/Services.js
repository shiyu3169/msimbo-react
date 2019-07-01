import React from 'react';
import ServiceIcon from './ServiceIcon';

function Services() {
  return (
    <>
      <section className='services'>
        <div className='container grid-3 center'>
          <ServiceIcon
            iconClass='fas fa-users fa-3x'
            title='Students'
            description='Students list'
            to='/students'
          />
          <ServiceIcon
            iconClass='fas fa-graduation-cap fa-3x'
            title='Curriculum'
            description='Course Schedule'
            href='https://docs.google.com/spreadsheets/d/1B34dAaxyfY_Z6an_bQ0nB8HnSewuqByvBxcy5f7-b0A/edit?usp=sharing'
          />
          <ServiceIcon
            iconClass='fab fa-youtube fa-3x'
            title='Videos'
            description='Class Videos on Youtube'
            to='/videos'
          />
        </div>
      </section>
      <section className='services'>
        <div className='container grid-3 center'>
          <ServiceIcon
            iconClass='fas fa-pencil-ruler fa-3x'
            title='Assignments'
            description='Student Assignments'
            to='/assignments'
          />
          <ServiceIcon
            iconClass='fas fa-archive fa-3x'
            title='Resources'
            description='Course slides and materials'
            to='/resources'
          />
          <ServiceIcon
            iconClass='fas fa-pencil-alt fa-3x'
            title='Assessments'
            description='Course slides and materials'
            to='/quiz'
          />
        </div>
      </section>
    </>
  );
}

export default Services;
