
  export const buttonHover = {
    hover:{
      scale:1.1,
      transition:{
        repeat:Infinity,
        duration:0.4,
        repeatType:'reverse',
        ease: 'easeInOut'
        
      }
    },
    
  }
  
  export const textView = {
    hidden :{
      opacity:0,
      x:200,

    },
    show:{
      opacity:1,
      x:0,
      transition:{
        duration:1,
      }

    }
  }

  export const container ={
    hidden:{
      opacity:0,

    },
    show:{
      opacity:1,
    }
    
  }
  export const PagAnimation ={
    hidden:{
      opacity:0,
      y:200,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:0.5,
        // when:'beforeChildren',
        staggerChildren:0.5,
  
      }
    }}
    export const item = {
      hidden:{
        opacity:0,
        y:50
      },
      show:{
        opacity:1,
        y:0
      }
    }

    export const fade = {
      hidden:{
        scale:0.7,
      },
      show:{
        scale:1,
       transition:{
              duration:1
}
      }
    }

    export const translateslide ={
      hidden:{
        y:100,
        opacity:0,

      },
      show:{
        y:0,
        opacity:1,
        transition:{
          duration:1,
        }
      }
    }

  export const clientimgg = {
    hidden:{
       x:-100,
       opacity:0
    },
    show:{
      opacity:1,
      x:0,
      transition:{
        duration:1
      }
    }
  }
  export const clientimghome = {
    hidden:{
       x:100,
       opacity:0
    },
    show:{
      opacity:1,
      x:0,
      transition:{
        duration:1
      }
    }
  }

  export const pricee  ={
    hidden:{
      opacity:0,
      scale:0.8,
      y:100,
    },
    show:{
      opacity:1,
      scale:1,
      y:0,
      transition:{
        duration:1
      }
    }
  }