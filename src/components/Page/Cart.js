import React from 'react'
import './Cart.css'
export default function Cart() {
    return (
        <>
            <div className='container mainpage'>
                <div className='heddinglines'>
                    <div className='lineone'></div>
                    <div className='lineone'></div>
                </div>
                <h1 className='hedding1'>YAY! It’s BOGO</h1>

            </div>
            <div className='mainbox'>
                <div className='boxone'>
                    <div className="col-md-5 product-name">
                        <div className="product-name">
                            <div className="product-info">
                                <input type='radio' name='boxRadio' className='radiobutton' />

                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className=''>
                            <div><h1> 1 Unit </h1></div>
                            <div className='offer'><p>10%Off</p></div>
                        </div>

                        <p>Standerd Price</p>
                    </div>

                    <div className='col-md-3'>
                        <h1>$10.00 USD</h1>
                        <span class="dress-card-crossed">$24.00 USD </span>

                    </div>


                </div>
                
                <div className='hiddendiv'>
                
                <div className='boxtwo'>
                <i className='span'>MOST POPULAR</i>
                    <div className="col-md-5 product-name">
                        <div className="product-name">
                            <div className="product-info">
                                <input type='radio' name='boxRadio' className='radiobutton' />

                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 responsiveee'>
                        <h1> 2 Unit </h1><div className='offer'></div>

                        <div>
                            <table>
                                <tr>
                                    <th></th>
                                    <th>size</th>
                                    <th>color</th>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td><select name="cars" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select></td>
                                    <td><select name="cars" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td>#2</td>
                                    <td><select name="cars" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select></td>
                                    <td><select name="cars" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className='col-md-3 twounit responsiveee'>
                        <h1>$18.00 USD</h1>
                        <span class="dress-card-crossed">$24.00 USD </span>

                    </div>


                </div>

                </div>
                
                <div className='boxone'>
                    <div className="col-md-5 product-name">
                        <div className="product-name">
                            <div className="product-info">
                                <input type='radio' name='boxRadio' className='radiobutton' />

                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className=''>
                            <div><h1> 3 Unit </h1></div>
                            <div className='offer'><p>30%Off</p></div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <h1>$24.00 USD</h1>
                        <span class="dress-card-crossed">$24.00 USD </span>

                    </div>


                </div>



                <div className='delivery'>
                    <h2 className='hedd'>Free Delivery</h2>
                    <h2>Total : $18.00 USD</h2>

                </div>


                <div>
                    <div class="col-md-6 card-button"><a href=""><div class="card-button-inner bag-button">Add to Cart</div></a></div>
                </div>
            </div>


        </>
    )
}
