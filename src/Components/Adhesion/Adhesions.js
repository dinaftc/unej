import React ,{ useState } from 'react';
function Adhesions() {
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const showmeForm1 = () => {
    setShowForm2(false);
    setShowForm1(true);
    setShowForm3(false);
  }
  const showmeForm2 = () => {
    setShowForm1(false);
    setShowForm2(true);
    setShowForm3(false);
  }
  const showmeForm3 = () => {
    setShowForm1(false);
    setShowForm2(false);
    setShowForm3(true);
  }


    return (
      <div>
        <h1 className="mb-5 text-5xl font-bold text-center">Soumettez votre adhésion à UNEJ-SBA</h1>
        <div className="btn-group flex flex-row items-center justify-center">
         <button className="btn  bg-secondary text-black border-none" onClick={()=>showmeForm1()}>General</button>
         <button className="btn  bg-secondary text-black border-none" onClick={()=>showmeForm2()}>Professional</button>
         <button className="btn  bg-secondary text-black border-none" onClick={()=>showmeForm3()}>Scan docs</button>
        </div>
        {showForm1 && <form>
        <div className="form-control mt-5 ">
         <label className="input-group grid grid-cols-2 ">
          <input type="text" placeholder="Votre nom" className="input input-bordered ml-5 mb-3" required/>
          <input type="text" placeholder="votre prenom" className="input input-bordered ml-5 mb-3" required />
          <input type="email" placeholder="email" className="input input-bordered ml-5 mb-3" required/>
          <input type="tel" placeholder="n telephone" className="input input-bordered ml-5 mb-3" required />
          <input type="date" placeholder="date de naissance" className="input input-bordered ml-5 mb-3" required />
          <input type="text" placeholder="commune de naissance" className="input input-bordered ml-5 mb-3" required />
          <input type="text" placeholder="fils de Mr" className="input input-bordered ml-5 mb-3" required />
          <input type="text" placeholder="fils de Mm" className="input input-bordered ml-5 mb-3" required />
          <input type="text" placeholder="adresse exacte" className="input input-bordered ml-5 mb-3" required />
         </label>
        </div>
        </form>}
        {showForm2 && <form>
        <div className="form-control mt-5 ">
         <label className="input-group grid grid-cols-2 ">
         <input type="text" placeholder="Domaine" className="input input-bordered ml-5 mb-3" required/>
          <input type="text" placeholder="Specialite" className="input input-bordered ml-5 mb-3" required />
          <input type="text" placeholder="Diplome" className="input input-bordered ml-5 mb-3" required/>
          <input type="text" placeholder="Experience Professionelle" className="input input-bordered ml-5 mb-3" required />
          </label>
        </div>
        </form>}
        {showForm3 && <form>
        <div className="form-control mt-5 ml-5">
         <label className="input-group grid grid-cols-2 ">
         <label >Piece d'identite
          <input type="File" name="Piece d'identite" className="input ml-5 mb-3" required/>
          </label>
          <label >Photo d'identite
          <input type="File" placeholder="photo d'identite" className="input ml-5 mb-3" required />
          </label>
          <label >Diplome
          <input type="File" placeholder="Diplome" className="input ml-5 mb-3" required/>
          </label>
          <label>Recu de paiement
          <input type="File" placeholder="Recu de paiement" className="input ml-5 mb-3" required />
          </label>
         </label>
        </div>
        </form>}
        <p className='ml-5'>** <br />
   N° Compte-RIB- : 001 00774 0200 000 530- 61 <br />
   ouvert au nom de : Union National des Experts Judiciaires <br />
   la somme de : 10 000,00 DA</p>
      </div>
    )
}

export default Adhesions;