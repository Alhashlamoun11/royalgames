'use client'
import React, { useEffect, useState } from 'react';
import Achievments from '../achievements/achievements';
import UpcomingMatches from '../upcoming-match/upcoming-matches';
import CLanMembers from '../clan/all-clan-members';
import ErrorMsg from '../common/err-message';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import Link from 'next/link';
import CardsArea from '../cards/members_area';
import TeamInfoArea from './team-info-area';
import { get, set } from 'local-storage';
import { redirect, useRouter } from 'next/navigation';

interface IFormInput {
    name: string;
    short_name: string;
    image: File;
    description: string;
}

const TeamDetails = ({ team, challenges, players }: any) => {
    const [user,setUser]=useState(get('user'));
    console.log(team)
    useEffect(() => {
      }, []);
    
  
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
    const [image, setImage] = useState<File | null>(null);
    const [logs, setLogs] = useState([])
const router=useRouter();
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.files ? e.target.files[0] : null);
      };
    
    const handleSubmitForm = (data: any) => {
        console.log(data)

        const FormData = require('form-data');
        let formData = new FormData();

        if (data.name)
            formData.append('name', data.name);

        if (data.description)
            formData.append('description', data.description);

        if (data.short_name)
            formData.append('short_name', data.short_name);

        formData.append('clan_id', team._id);
        formData.append('user_id', user._id);

        if (image)
            formData.append('image', image);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.BACKEND_URL}/update_clan`,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: formData
        };

        axios.request(config)
            .then((response) => {
                router.refresh()
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });


    }
    const handleLeavTeam = () => {
        const axios = require('axios');
        let data = JSON.stringify({
            "id": user._id
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.BACKEND_URL}/leave_clan`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response: any) => {
                if (response.data.success && response.data.data != null) {
                          set('user', JSON.stringify(response.data.data))
                    
                          router.push('/profile')

                } else if (response.data.success) {
                    Swal.fire({
                        title: "Info",
                        text: response.data.message,
                        icon: "warning"
                    })
                } else {
                    Swal.fire({
                        title: "Error",
                        text: response.data.message,
                        icon: "error"
                    })

                }
                console.log(JSON.stringify(response.data));
            })
            .catch((error: any) => {
                console.log(error);
            });

    }

    useEffect(() => {
        const getClanLogs = () => {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${process.env.BACKEND_URL}/get_clan_logs/${user.clan_id._id}`,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    setLogs(response.data.data)
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });

        }
        getClanLogs()
    }, [])

    return (
        <>
            <section className="shop-area shop-details-area">
                <div className="container">
                    <div className="row">
                        {/* shop details images  */}
                        <div className="shop__details-images-wrap">

                            <div className="tab-content" id="imageTabContent">
                                <div key={team._id} className={`tab-pane show active`} id={team._id} role="tabpanel" aria-labelledby={`${team._id}-tab`}>
                                    <a className="popup-image cursor-pointer">
                                        <img src={team.image} alt="img" style={{ minWidth: '500px', width: 'auto', height: 'auto' }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* shop details images  */}
                        <div className="shop__details-content">
                            {/* <div className="shop__details-rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span className="rating-count">( 3 Customer Review )</span>
                      </div> */}

                            <div className="shop__details-price">
                                <span style={{ marginRight: '20px' }} className="title">{team.name}</span>
                                <span className="tg-btn-2">
                                    {team.type}
                                </span>

                                {/* <span className="amount">${product.price.toFixed(2)} <span className="stock-status">- {product.status}</span></span> */}
                            </div>
                            <div className="shop__details-short-description">
                                <p style={{ wordBreak: 'break-word' }}>{team.short_name}</p>
                            </div>
                            {/* <div className="shop__details-model d-flex align-items-center">
                          <p className="model m-0">Model:</p>
                          <ul className="list-wrap d-flex align-items-center">
                              <li onClick={()=> setModel('Gat')} className={model=== 'Gat'?'active':''}>Gat</li>
                              <li onClick={()=> setModel('dat4')} className={model=== 'dat4'?'active':''}>dat4</li>
                              <li onClick={()=> setModel('rt30')} className={model=== 'rt30'?'active':''}>rt30</li>
                          </ul>
                      </div> */}
                            <TeamInfoArea user={team} />
                            {/* <div className="shop__details-qty">
                                <h4>Achievments : </h4>
                                <Achievments background="#0f161b" data={team} iconWidth={50} />
                            </div> */}
                            {/* <div className="shop__details-bottom">
                          <div className="posted_in">
                              <b>Categories :</b>
                              <Link href="/shop">Gamdias,</Link>
                              <Link href="/shop">Apple,</Link>
                              <Link href="/shop">Huawei</Link>
                          </div>
                          <div className="tagged_as">
                              <b>Tags :</b>
                              <Link href="/shop">Silver,</Link>
                              <Link href="/shop">Pink,</Link>
                              <Link href="/shop">Green</Link>
                          </div>
                          <div className="product_share">
                              <b>Share :</b>
                              <Link href="/shop"><i className="fab fa-facebook-f"></i></Link>
                              <Link href="/shop"><i className="fab fa-twitter"></i></Link>
                              <Link href="/shop"><i className="fab fa-instagram"></i></Link>
                          </div>
                      </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product__desc-wrap">
                                {user != null && (team.owner_id == user._id || (user.clan_id._id == team._id && user.role == 1)) ?
                                    (<ul className="nav nav-tabs" id="descriptionTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="editeInfo-tab" data-bs-toggle="tab" data-bs-target="#editeInfo" type="button" role="tab" aria-controls="editeInfo" aria-selected="true" tabIndex={-1}>Edit Info</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="challenges-tab" data-bs-toggle="tab" data-bs-target="#challenges" type="button" role="tab" aria-controls="challenges" aria-selected="false" tabIndex={0}>Challenges</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="editeMembers-tab" data-bs-toggle="tab" data-bs-target="#editeMembers" type="button" role="tab" aria-controls="editeMembers" aria-selected="false" tabIndex={1}>Edite Members</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="logs-tab" data-bs-toggle="tab" data-bs-target="#logs" type="button" role="tab" aria-controls="logs" aria-selected="false" tabIndex={2}>Logs</button>
                                        </li>
                                        {user != null && user.clan_id._id == team._id ?
                                            (<li className="nav-item" role="presentation">
                                                <button onClick={handleLeavTeam} style={{ background: "#9b0303" }} className="nav-link" >Leave</button>
                                            </li>) : null}

                                    </ul>)
                                    : (<ul className="nav nav-tabs" id="descriptionTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true" tabIndex={-1}>Description</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="challenges-tab" data-bs-toggle="tab" data-bs-target="#challenges" type="button" role="tab" aria-controls="challenges" aria-selected="true" tabIndex={0}>Challenges</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="mempers-tab" data-bs-toggle="tab" data-bs-target="#mempers" type="button" role="tab" aria-controls="mempers" aria-selected="true" tabIndex={1}>Mempers</button>
                                        </li>
                                        {user != null && user.clan_id._id == team._id ?
                                            (<li className="nav-item" role="presentation">
                                                <button onClick={handleLeavTeam} style={{ background: "#9b0303" }} className="nav-link" >Leave</button>
                                            </li>) : null}
                                    </ul>)}
                                {user != null && (team.owner_id == user._id || (user.clan_id._id == team._id && user.role == 1)) ?
                                    (<div className="tab-content" id="descriptionTabContent">
                                        <div className="tab-pane animation-none fade show active" id="editeInfo" role="tabpanel" aria-labelledby="editeInfo-tab">
                                            <div className="col-lg-6 col-md-10">
                                                <div className="contact__form-wrap">

                                                    <div className="container">

                                                        <form onSubmit={handleSubmit(handleSubmitForm)} encType="multipart/form-data" id="contact-form">
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    <ErrorMsg msg={errors.short_name?.message as string} />
                                                                    <div className="input-grp row">
                                                                        <label >Short Name: </label>
                                                                        <input {...register("short_name")} name="short_name" id="short_name" type="text" contentEditable={true} defaultValue={team.short_name} placeholder="Team Short Name *" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <ErrorMsg msg={errors.image?.message as string} />
                                                                    <div className="input-grp row">
                                                                        <label>Clan Image :</label>
                                                                        <input {...register("image")} name="image" id="image"
                                                                            // onChange={(e) => {
                                                                            //     setImage(e.target.files != null ? e.target.files[0] : null)
                                                                            // }}
                                                                            onChange={handleImageChange}
                                                                            type="file" />
                                                                    </div>
                                                                </div>
                                                                <ErrorMsg msg={errors.description?.message as string} />
                                                                <div className="input-grp row">
                                                                    <label>Description :</label>
                                                                    <textarea placeholder="Clan Description" {...register("description")} name="description" id="description">{team.description}</textarea>
                                                                </div>

                                                            </div>
                                                            <button type="submit" className="submit-btn">Update</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane animation-none fade" id="editeMembers" role="tabpanel" aria-labelledby="editeMembers-tab">
                                            {players.length > 0 ? (<CardsArea players={players} id={team._id} />) : (<h5>No Data Found</h5>)}

                                        </div>
                                        <div className="tab-pane animation-none fade" id="challenges" role="tabpanel" aria-labelledby="challenges-tab">
                                            {challenges.length > 0 ? (<UpcomingMatches id={team._id} challenges={challenges} />) : (<h5>No Data Found</h5>)}

                                        </div>

                                        <div className="tab-pane animation-none fade" id="logs" role="tabpanel" aria-labelledby="logs-tab">
                                            {/* related products start */}
                                            <ul style={{ maxHeight: '300px', listStyleType: 'none', fontSize: '14px', overflowY: 'scroll' }}>
                                                {logs.length > 0 ? logs.map((e: any, i) => (<li key={i}>{new Date(e.created_at).toISOString().split('T')[0]} {new Date(e.created_at).toISOString().split('T')[1]}:~$ {e.log}</li>)) : (<h5>No Data Found</h5>)}
                                                {/* related products end */}
                                            </ul>
                                        </div>
                                    </div>) : (
                                        <div className="tab-content" id="descriptionTabContent">
                                            <div className="tab-pane animation-none fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                                <p style={{ wordBreak: 'break-all' }}>{team.description}</p>
                                            </div>
                                            <div className="tab-pane animation-none fade" id="challenges" role="tabpanel" aria-labelledby="challenges-tab">
                                                {challenges.length > 0 ? (<UpcomingMatches id={team._id} challenges={challenges} />) : (<h5>No Data Found</h5>)}

                                            </div>
                                            <div className="tab-pane animation-none fade" id="mempers" role="tabpanel" aria-labelledby="mempers-tab">
                                                {/* related products start */}
                                                {players.length > 0 ? (<CardsArea players={players} id={team._id} />) : (<h5>No Data Found</h5>)}
                                                {/* related products end */}
                                            </div>
                                        </div>

                                    )}

                            </div>
                        </div>
                    </div>
                    {/* <div className="related__product-area"> */}
                    {/* related products start */}
                    {/* <RelatedProducts/> */}
                    {/* related products end */}
                    {/* </div> */}
                </div>
            </section>
        </>
    );
};

export default TeamDetails