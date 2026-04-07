import { useEffect, useState } from "react";

export default function Course(){

    const [course,setCourse] = useState([])
    
    useEffect(()=>{
        fetch("http://localhost:3000/courses")
        .then((res) => {return res.json()
        }).then((data) => setCourse(data))
    },[]);   // dependency array , we want to fetch data only once when the compoent is rendered for 1st time

    if(!course){
        return <></>
    }
    const CourseList = course.map((item) => 
        <Course key={item.id} name={item.name} image={item.image} duration={item.duration} fee={item.fee}/>
    )

    return(
        <div>
            {CourseList}
        </div>
    );
}