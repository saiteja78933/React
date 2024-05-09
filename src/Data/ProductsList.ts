import egg1 from '../Assets/pexels-monserratsoldu-600615.jpg';
import egg2 from '../Assets/pexels-dialnutrition-806457.jpg';
import egg3 from '../Assets/pexels-kendra-coupland-1366793-2642201.jpg';
import egg4 from '../Assets/pexels-pixabay-162712.jpg';
import curd1 from'../Assets/Curd/anshu-a--hAvXEvW9Y0-unsplash.jpg';
import curd2 from'../Assets/Curd/anshu-a-fIs9p9eTksw-unsplash.jpg';
import curd3 from'../Assets/Curd/mario-raj-0sz-sfC_ekc-unsplash.jpg';
import curd4 from'../Assets/Curd/sumeet-b-e2b0-q7gjgg-unsplash.jpg';
import paneer1 from '../Assets/Paneer/kanwardeep-kaur-jTv_cWxEtFs-unsplash.jpg';
import paneer2 from '../Assets/Paneer/raman-sqcH2q7lkvo-unsplash.jpg'
import paneer3 from '../Assets/Paneer/viktor-forgacs-WmKXu-bzygo-unsplash.jpg'
import paneer4 from '../Assets/Paneer/zablanca_clicks-7jERG_ACcQs-unsplash.jpg'
import butter1 from '../Assets/Butter/megumi-nachev-xhOUnxVVb6s-unsplash.jpg';
import butter2 from '../Assets/Butter/simon-sapper-aLUCJreCnsg-unsplash.jpg'
import butter3 from '../Assets/Butter/sincerely-media-LcfdOp72zdE-unsplash.jpg'
import butter4 from '../Assets/Butter/sorin-gheorghita-nnRdjlAhShI-unsplash.jpg'
import cheese1 from '../Assets/Cheese/alice-donovan-rouse-9MzCd76xLGk-unsplash.jpg'
import cheese2 from '../Assets/Cheese/farhad-ibrahimzade-qnuwYOakgvA-unsplash.jpg'
import cheese3 from '../Assets/Cheese/kilian-seiler-h9Nh1eYv-ww-unsplash.jpg'
import cheese4 from '../Assets/Cheese/lindsay-moe-n-QvF3vyf5M-unsplash.jpg'
import { Product } from '../Types/Product';
import bread1 from '../Assets/Bread/charles-chen-e83dQJ-BMog-unsplash.jpg';
import bread2 from '../Assets/Bread/duminda-perera-zYsB2mezSnA-unsplash.jpg'
import bread3 from '../Assets/Bread/kate-remmer-RZn4_FzNUCY-unsplash.jpg'
import bread4 from '../Assets/Bread/rebecca-matthews-yjWNJRwt8mc-unsplash.jpg'
import biscuits1 from '../Assets/Biscuits/mae-mu-kID9sxbJ3BQ-unsplash.jpg';
import biscuits2 from '../Assets/Biscuits/pawel-czerwinski-HhtJESDMdFY-unsplash.jpg'
import biscuits3 from '../Assets/Biscuits/pushpak-dsilva-UZrGpkCLvK0-unsplash.jpg'
import biscuits4 from '../Assets/Biscuits/vyshnavi-bisani-z8kriatLFdA-unsplash.jpg'
import chocolates1 from '../Assets/Chocolates/behnam-norouzi-ujLwdmqIHwY-unsplash.jpg';
import chocolates2 from '../Assets/Chocolates/pushpak-dsilva-r-hQw_obFd0-unsplash.jpg'
import chocolates3 from '../Assets/Chocolates/sara-cervera-we4l7ch6iwc-unsplash.jpg'
import chocolates4 from '../Assets/Chocolates/tetiana-bykovets-2SoEaPFcEt4-unsplash.jpg'
import softdrinks1 from '../Assets/Softdrinks/ja-san-miguel-xYSp0kkIUio-unsplash.jpg';
import softdrinks2 from '../Assets/Softdrinks/jenny-pace-K5IUb0kBZZ8-unsplash.jpg'
import softdrinks3 from '../Assets/Softdrinks/jonny-caspari-sQNq223Rr54-unsplash.jpg'
import softdrinks4 from '../Assets/Softdrinks/kaffee-meister-BIeXZhg_7sw-unsplash.jpg'
import juices1 from '../Assets/Juices/abhishek-hajare-kkrXVKK-jhg-unsplash.jpg';
import juices2 from '../Assets/Juices/dhiren-maru-vN1YusQcUJ4-unsplash.jpg'
import juices3 from '../Assets/Juices/jugoslocos-QD4yCjlD44A-unsplash.jpg'
import juices4 from '../Assets/Juices/jugoslocos-i8JfQDc4Ha8-unsplash.jpg'
export const productsList: Product[] = [
  {
    id: 11,
    title: "eggs",
    description: "It is a pack of 12 eggs",
   price: 60,
    "images": [egg1,egg2,egg3,egg4],
  },
  {
  id: 12,
    title: "curd",
    description: "It is a 500g  of fresh curd",
   price: 30,
    "images": [curd1,curd2,curd3,curd4],
  },
  {
    id: 13,
    title: "paneer",
    description: "It is a 200g pack of fresh paneer",
   price: 120,
    "images": [paneer1,paneer2,paneer3,paneer4],
  },
  {
    id: 14,
    title: "butter",
    description: "It is a 200g pack of salted butter",
   price: 100,
    "images": [butter1,butter2,butter3,butter4],
  },
  {
    id: 15,
    title: "cheese",
    description: "It is a 200g pack of processed cheese",
   price: 150,
    "images": [cheese1,cheese2,cheese3,cheese4],
  },
  {
    id: 16,
    title: "bread",
    description: "It is a pack of 6 slices of brown bread",
   price: 30,
    "images": [bread1,bread2,bread3,bread4],
  },
  {
    id: 17,
    title: "biscuits",
    description: "It is a pack of 200g glucose biscuits",
   price: 20,
    "images": [biscuits1,biscuits2,biscuits3,biscuits4],
  },
  {
    id: 18,
    title: "chocolates",
    description: "It is a pack of 50g milk chocolates",
   price: 40,
    "images": [chocolates1,chocolates2,chocolates3,chocolates4],
  },
  {
    id: 19,
    title: "soft drinks",
    description: "It is a 2L bottle of cola",
   price: 60,
    "images": [softdrinks1,softdrinks2,softdrinks3,softdrinks4],
  },
  {
    id: 20,
    title: "juices",
    description: "It is a 1L pack of orange juice",
   price: 80,
   images: [juices1,juices2,juices3,juices4],
  }
]