import { getFirestore, collection, documentId, getDocs, query, where } from "firebase/firestore";
import { app } from "../DatabaseConnection"
import { Meci } from "../Clase/Meci"

const db = getFirestore(app);

const matchCollection = collection(db, "meci");


export async function getPrimele3Meciuri(db) {
    const q = query(
        matchCollection,
        where(documentId(), "in", 
          [
            "1", 
            "2", 
            "3"
          ]
        ),
    );
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) =>{
        console.log(doc.id, " => ", doc.get("adversar"))
    })
}