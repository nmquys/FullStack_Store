import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import BootstrapButton from "./BootstrapButton";

export default function Home()
{
    return(
        <div className="home-container">
            <div className="container col-6">
                <BootstrapButton text="Submit" type="primary" />
                <BootstrapButton text="Save" type="secondary" />
                <BootstrapButton text="OK" type="success" />
                <BootstrapButton text="Cancel" type="danger" />
                <BootstrapButton text="Delete" type="warning" />
                <BootstrapButton text="Link" type="link" />
            </div>
            <div className="d-grid gap-2 col-8 mx-auto">
                <div className="alert alert-primary text-center" role="alert"></div>
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Warning!</strong>This is a warning alert.
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                </div>
            </div>
            <PageHeading  title="Explore Sticker">
                Add a touch of creativity to your space with our wide rage of fun 
                and unique stickers. Perfect for any occasion!
            </PageHeading>
            <ProductListings products={products}/>
        </div>
    );
}