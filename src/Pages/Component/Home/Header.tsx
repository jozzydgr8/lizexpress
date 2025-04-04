export const Header = ()=>{
    const styles = {
        container:{
            height:'30vh'
        }
    }
    return(
        <section style={styles.container}>
            <div className="container-fluid" style={{ height:'100%'}}>
                <div style={{
              
                    height:'100%',
         
                  
                    display:'flex',
                    justifyContent:'flex-end',
                    alignItems:'center'
                   
                    }}>
                    <h1 
                    >
                    <span className="color-text">Swap</span> what you
                    <span className="color-text"> have</span><br/> for what you  
                     <span className="color-text"> need!</span>
                    </h1>
                </div>
            </div>
        </section>
    )
}