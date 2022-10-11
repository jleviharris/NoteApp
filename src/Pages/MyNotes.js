import React from "react";
import { Link } from "react-router-dom";

const MyNotes = () => {
  return (
    <div className="myNotes">
      <div className="myNotesPageHeader">My Notes</div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <div className="hpIndividualNotes">
        {/* for each note map div with date and then div with note header */}
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
        <div className="hpSingleNote">
          <div className="hpindividualNoteDate">Jan 5th</div>
          <div className="hpindividualNoteTitle">Grocery list</div>
        </div>
      </div>
    </div>
  );
};

export default MyNotes;
