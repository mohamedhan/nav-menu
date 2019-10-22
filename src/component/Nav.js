import React from 'react'

const Nav = (props) => {
    return (
        <div className=" nav">
            <ul className="nav-menu">
                {props.elem.map(el=><li className="elem">{el.items}
                {el.dropdown ? <ul className="drop">{el.dropdown.map(el=><li>{el}</li>)}
                </ul> : null}
                </li>
                )
                
            }
            </ul>
            
        </div>
    )
}

export default Nav
{/* const LinkItem = (props) => {
   return (
       <ul className='x'>
       {props.element.map(el =><li >{el.items}
       { el.dpd ? <ul className='dpd'>{el.dpd.map(el => <li>{el}</li>)}
       </ul> : null
        }
        </li>
        ) }
        </ul>
   );
 }; */}