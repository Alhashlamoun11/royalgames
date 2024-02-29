// type
type IMenuDataType = {
  id: number;
  title: string;
  link: string;
  sub_menu?: {
      title: string;
      link: string;
  }[];
}

const menu_data:IMenuDataType[] = [
  {
    id:1,
    title:'Home',
    link:'/'
  },
  {
    id:2,
    title:'TORNAMENT',
    link:'/tournament',
  },
  {
    id:3,
    title:'PLAYERS',
    link:'/players',
  },
  {
    id:5,
    title:'Clans',
    link:'/clans'
  },
  {
    id:5,
    title:'Black List',
    link:'/black-list'
  },  
  {
    id:7,
    title:'Other',
    link:'#',
    sub_menu:[
      {title:'ABOUT',link:'/about'},
      {title:'Streamers',link:'/streamers'},
      {title:'Our App',link:'/application'},
      {title:'Tutorials',link:'/tutorials'}
    ]

  }
]

export default menu_data;