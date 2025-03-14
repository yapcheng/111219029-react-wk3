import Header from '../components/Header' 
import Detail from '../components/Detail'
import Footer from ' ../components/Footer'
function Home() {
return (
<div className="container mx-auto main-layout">
    <Header />
    <ProductList />
    <Footer /> 
</div>
)
}
export default Home