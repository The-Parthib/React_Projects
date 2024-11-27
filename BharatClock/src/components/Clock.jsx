function Clock(){
    
    let date = new Date();

    function time(){
        let tim = (date.toLocaleTimeString());
        return tim;
    }


    return (
      <>
      <center>  
        <p className="clock">Reload for Current Time ::  {time()}</p>
      </center>
      </>
    );
}

export default Clock;