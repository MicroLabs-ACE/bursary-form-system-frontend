import './App.scss';
import Modal from './components/Modal';
import showlist from '../src/Assets/showlist.svg' 
import edit from '../src/Assets/edit.svg'
import draft from '../src/Assets/draft.svg'
import filled from '../src/Assets/filled.svg'


const availableList=[
  {
    id:1,
    title:' Store requisition form',
  },
  {
    id:2,
    title:' Imprest holder’s form',
  }, {
    id:3,
    title:'Interdepartmental charges authorization form',
  }, {
    id:4,
    title:'Night Claim',
  }, {
    id:5,
    title:'Cash form',
  }, {
    id:6,
    title:'Signature card form',
  },
]

function App() {
  return (
    <div className='app container'>
      <Modal type='info'msg="You have no pending form" />
      <div className='form-section'>
        <div className='available-forms'>
          <div className='form-heading'>
            <img src={showlist} alt='list'/>
            <h6>
            Avaliable Forms
            </h6>
          </div>
          <div className='available-forms__lists'>
            {availableList.map((form)=>{
              return(
                <button key={form.id} className='variant-a'><li>{form.title}</li></button>
              )
            })}
          </div>
        </div>
        <div className='other-forms'>
          <div className='drafted-forms'>
          <div className='form-heading'>
            <img src={draft} alt='drafts'/>
            <h6>
            Drafted Forms
            </h6>
          </div>
          <div className='form-list'>
            {availableList.filter(list=>{return (list.id<3)}).map((list)=>{return(
              <div className='form-card'>
                <div className='form-card__info'>
                <p className='midi'>{list?.title} (English dept. unit)</p>
                <p className='mini'>
                12/12/2023
                </p>
                </div>
                <div className='form-card__edit'>
                  <img src={edit} alt='edit  form'/>
                  <p>Edit</p>
                </div>
              </div>

            )})}
            <button className='variant-a'>See all</button>
          </div>
          </div>
          <div className='Filled-forms'>
          <div className='form-heading'>
            <img src={filled} alt='filled form'/>
            <h6>
            Filled Forms
            </h6>
          </div>
          <div className='form-list'>
            {availableList.filter(list=>{return (list.id<3)}).map((list)=>{return(
              <div className='form-card'>
                <div className='form-card__info'>
                <p className='midi'>{list?.title} (English dept. unit)</p>
                <p className='mini'>
                12/12/2023
                </p>
                </div>
                <div className='form-card__receipt'>
                  <p>Download Receipt</p>
                </div>
              </div>

            )})}
            <button className='variant-a'>See all</button>
          </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
