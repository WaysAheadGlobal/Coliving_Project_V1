import { useEffect } from 'react';

function ThankYou() {
    useEffect(()=> {
        window.scrollTo(0, 0)
    },[])
    return (
        <section class="thankyoupage padd80">
            <div class="container">
                <div class="text-center mt-5 mb-5 pt-5">
                    <img src={require('./../../../src/img/thankyou.png')} alt="Thank You" class="img-fluid thankimg" />
                        <h4>Thank you for choosing Coliving</h4>
                        <p class="mb-0">We’ll notified you when your request will be approved.</p>
                </div>
            </div>
        </section>
    )
}

export default ThankYou;