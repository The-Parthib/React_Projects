import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const url = "https://api.github.com/users/The-Parthib";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(()=>{
  //     fetch(url)
  //     .then(res => res.json())
  //     .then(data=>{
  //         console.log(data)
  //         setData(data)
  //     })
  // },[])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl0">
      Github Followers :{data.followers}
      <img src={data.avatar_url} alt="GitHub Profile Image" width={300} />
    </div>
  );
}

export default Github;

export const gitHubInfoLoader = async () => {
  const response = await fetch(url);
  return response.json();
};
