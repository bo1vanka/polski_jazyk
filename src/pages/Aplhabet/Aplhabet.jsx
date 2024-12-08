 
import React from 'react';
import Letter from '../../ui/Letter/Letter';
import s from './Aplhabet.module.scss'
import Table1 from '../../components/Table1/Table1';
import Table3 from '../../components/Table3/Table3';
import Table2 from '../../components/Table2/Table2';


const Alphabet = () => {
    

  return (
    
    <div>
       <div className={s.title}>Alphabet</div>
       <div className={s.container}>
      <div className={s.letterr}>
        { 
        < >
          <Letter letter={'A'} />
          <Letter letter={'Ą'} />
          <Letter letter={'B'} />
          <Letter letter={'C'} />
          <Letter letter={'Ć'} />
          <Letter letter={'D'} />
          <Letter letter={'E'} />
          <Letter letter={'Ę'} />
          <Letter letter={'F'} />
          <Letter letter={'G'} />
          <Letter letter={'H'} />
          <Letter letter={'I'} />
          <Letter letter={'J'} />
          <Letter letter={'K'} />
          <Letter letter={'L'} />
          <Letter letter={'Ł'} />
          <Letter letter={'M'} />
          <Letter letter={'N'} />
          <Letter letter={'Ń'} />
          <Letter letter={'O'} />
          <Letter letter={'Ó'} />
          <Letter letter={'P'} />
          <Letter letter={'Q'} />
          <Letter letter={'R'} />
          <Letter letter={'S'} />
          <Letter letter={'Ś'} />
          <Letter letter={'T'} />
          <Letter letter={'U'} />
          <Letter letter={'V'} />
          <Letter letter={'W'} />
          <Letter letter={'X'} />
          <Letter letter={'Y'} />
          <Letter letter={'Z'} />
          <Letter letter={'Ź'} />
          <Letter letter={'Ż'} />
                  
          </>
          }
          
      </div>
      </div>
      <Table1/>
      <Table2/>
      <Table3/>
    
    </div>
  );
};

export default Alphabet;
