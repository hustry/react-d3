import React,{Component} from "react";

import * as d3 from "d3";

class PieChart extends Component {

	render(){
		const {x,y,r,data} = this.props;
		let pie = d3.pie()
			.value((d)=>(d.value))(data)
			.sort((a,b)=>d3.ascending(a.data.i,b.data.i));
		let translate = `translate(${x},${y})`;
		let colors = d3.scaleOrdinal(d3.schemeCategory10);

		return (
			<g transform={translate}>
				{
					pie.map((d,i)=>(
						<Arc key={i} 
							 data={d}
							 innerRadius="0"
							 outerRadius={r}
							 color={colors(d.data.i)}/>
					))
				}
			</g>
		);
	}
}

const Arc = (props)=>{
	const arc = d3.arc()
				  .innerRadius(props.innerRadius)
				  .outerRadius(props.outerRadius);
	return (
		<Path d={arc(props.data)}
			  style={{fill:props.color}}
			  easing="cubicInOut" 
			  duration={300} />
	);
}

class Path extends Component{
	render(){
		return (
			<path d={this.props.d}
				  style={this.props.style}
				  ref="node"></path>
		);
	}
}

export default PieChart;