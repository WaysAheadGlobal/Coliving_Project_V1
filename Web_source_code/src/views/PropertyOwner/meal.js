import { Link, useNavigate } from 'react-router-dom';
function Meals() {
    const history = useNavigate();

    const editMeal = (id) => {
        history("/owner/mealsAdd/"+id);
    }
    return (
        <div class="content-area">
            <h4 class="content-title">Meal</h4>
            <div class="profileform">
                <div class="row">
                    <div class="col-12 text-end mb-2">
                        <button class="btn btn-primary text-capitalize" onClick={()=> editMeal(0)}><i class="fa fa-solid fa-plus"></i>&nbsp; add meal</button>
                    </div>
                </div>
                <div class="table-layout1">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="text-center">image</th>
                                    <th class="text-center">meal name</th>
                                    <th class="text-center">Location</th>
                                    <th class="text-center">Time</th>
                                    <th class="text-center">Charges ($)</th>
                                    <th class="text-center">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">
                                        <div class="tbleimg">
                                            <img src={require('../../img/mealimg1.png')} class="img-fluid" alt="Meal Image" />
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        Breakfast
                                    </td>
                                    <td class="text-center">
                                        Urban Styled Apt.
                                    </td>
                                    <td class="text-center">
                                        7-8 am
                                    </td>
                                    <td class="text-center">
                                        $12/month
                                    </td>
                                    <td class="text-center">
                                        <div class="tablebtngrp">
                                            <button class="delete" onClick={()=> editMeal(1)}><i class="fa fa-solid fa-pencil"></i></button>
                                            <button class="delete"><i class="fa fa-regular fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <div class="tbleimg">
                                            <img src={require('../../img/mealimg1.png')} class="img-fluid" alt="Meal Image" />
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        Lunch
                                    </td>
                                    <td class="text-center">
                                        Urban Styled Apt.
                                    </td>
                                    <td class="text-center">
                                        12-1 pm
                                    </td>
                                    <td class="text-center">
                                        $18/month
                                    </td>
                                    <td class="text-center">
                                        <div class="tablebtngrp">
                                            <button class="delete" onClick={()=> editMeal(2)}><i class="fa fa-solid fa-pencil"></i></button>
                                            <button class="delete"><i class="fa fa-regular fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <div class="tbleimg">
                                            <img src={require('../../img/mealimg1.png')} class="img-fluid" alt="Meal Image" />
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        Snack
                                    </td>
                                    <td class="text-center">
                                        Urban Styled Apt.
                                    </td>
                                    <td class="text-center">
                                        3-4 pm
                                    </td>
                                    <td class="text-center">
                                        $11/month
                                    </td>
                                    <td class="text-center">
                                        <div class="tablebtngrp">
                                            <button class="delete" onClick={()=> editMeal(3)}><i class="fa fa-solid fa-pencil"></i></button>
                                            <button class="delete"><i class="fa fa-regular fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <div class="tbleimg">
                                            <img src={require('../../img/mealimg1.png')} class="img-fluid" alt="Meal Image" />
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        Dinner
                                    </td>
                                    <td class="text-center">
                                        Urban Styled Apt.
                                    </td>
                                    <td class="text-center">
                                        7-8 am
                                    </td>
                                    <td class="text-center">
                                        $20/month
                                    </td>
                                    <td class="text-center">
                                        <div class="tablebtngrp">
                                            <button class="delete" onClick={()=> editMeal(4)}><i class="fa fa-solid fa-pencil"></i></button>
                                            <button class="delete"><i class="fa fa-regular fa-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Meals;