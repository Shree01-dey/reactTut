import styles from "./Greeting.module.css"

function Greet(props){
    console.log(props)
    const ageGroup = props.age < 26 ? "young ppl" : (props.age === 26 ? "ppl" : "old ppl")
    return(
        <>
    <h1>Hii { props.name} {ageGroup }</h1>
    <p className= {styles.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, culpa. Voluptatum, cum itaque. Distinctio, at. Minima quae, aliquam esse eum dignissimos nihil incidunt cupiditate sequi error, qui alias accusamus eaque inventore asperiores quis! Ut, laudantium dolorum natus perferendis dolores doloremque nemo nihil necessitatibus nesciunt cupiditate temporibus culpa voluptatibus sunt similique quia nisi deserunt minima. Praesentium, nisi quis quos consequatur aspernatur dolorum eligendi ullam id nemo ipsum officiis inventore nobis cupiditate omnis accusantium, voluptatem iusto porro dolore harum? Veniam ut temporibus suscipit ipsum hic facere, fugit nam numquam illo magnam maxime possimus cupiditate? Quod impedit officia temporibus provident magni! Velit, necessitatibus?</p>
    </>
    )
}

export default Greet