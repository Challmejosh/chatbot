export const eachDiv = {
    initial: {
        opacity: 0,
        scale: 1.1
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            
        }
    },
    viewport:{
        amount: "some",
        once: true
    }
}
export const buttonVariants = {
    initial: {
        opacity: 0,
        scale: 1,
    },
    animate:{
        opacity: 1,
        scale: 1.2,
        transition:{
            // repeat: infinity,
            duration: 1,
        }
    },
    hover:{
        scale: 1.3,
        originX: 0,
        transition:{
            // repeat: infinity,
            duration: 1
        }
    },
    tap:{
        originX: 0,
        scale: 1
    }
}