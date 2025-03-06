import { AnimatePresence } from "framer-motion";

const Layout = ({children}) => {
    return ( 
        <AnimatePresence mode="wait" >
            {children}
        </AnimatePresence>
     );
}
 
export default Layout;