
function Footer() {
    const getDate = new Date();
    const formatedDate = getDate.toLocaleDateString('lt-Lt', {dateStyle: 'medium'})
  
    return (
      <div className="container">
       <footer>
          &copy; {formatedDate} Made with  ❤️ 
       </footer>
      </div>
    )
  }
  
  export default Footer