import logo from './logo.svg';
import './App.css';

export default function App() {
 
  return (
    <div className="App">
     <h1>Bootstrap Responsive pricing Table Snippet</h1>
     <h3>pricing table with crusor hover effects and buttons</h3>
    <Elite />
   
    
    </div>
   
  );
}

function Elite(){
  return(
    <div className='abd'>
    <div className='mahi'>
           <h5>Free</h5>
            <h6 ><strong>$0</strong><span class="period">/month</span></h6>
            <ul class="fa-ul">
              <li><i class="fas fa-check"></i>Single User </li>
              <li><i class="fas fa-check"></i>5GB Storage</li>
              <li><i class="fas fa-check"></i>Unlimited Public Projects</li>
              <li><i class="fas fa-check"></i>Community Access</li>
              <li className='oiii'><i class="fas fa-times"></i>Unlimited Private Projects</li>
              <li className='oiii'><i class="fas fa-times"></i> Dedicated Phone Support</li>
              <li className='oiii'><i class="fas fa-times"></i> Free Subdomain</li>
              <li className='oiii'><i class="fas fa-times"></i> Monthly Status Reports</li>
            </ul>
            <button class="btn btn-primary">button</button>
</div>
  <div className='mahi'>
  <h5>Plus</h5>
   <h6><strong>$9</strong><span class="period">/month</span></h6>
   <ul class="fa-ul">
     <li><i class="fas fa-check"></i> <strong>5 User</strong> </li>
     <li><i class="fas fa-check"></i>50GB Storage</li>
     <li><i class="fas fa-check"></i>Unlimited Public Projects</li>
     <li><i class="fas fa-check"></i>Community Access</li>
     <li><i class="fas fa-check"></i>Unlimited Private Projects</li>
     <li><i class="fas fa-check"></i> Dedicated Phone Support</li>
     <li><i class="fas fa-check"></i> Free Subdomain</li>
     <li className='oiii'><i class="fas fa-times"></i> Monthly Status Reports</li>
   </ul>
   <button class="btn btn-primary">button</button>
</div>
<div className='mahi'>
    <h5>Pro</h5>
     <h6><strong>$49</strong><span class="period">/month</span></h6>
     <ul class="fa-ul">
       <li ><i class="fas fa-check"></i><strong>Unlimited User </strong></li>
       <li><i class="fas fa-check"></i>150GB Storage</li>
       <li><i class="fas fa-check"></i>Unlimited Public Projects</li>
       <li><i class="fas fa-check"></i>Community Access</li>
       <li><i class="fas fa-check"></i>Unlimited Private Projects</li>
       <li><i class="fas fa-check"></i> Dedicated Phone Support</li>
       <li><i class="fas fa-check"></i>  <strong>Unlimited</strong> Free Subdomain</li>
       <li><i class="fas fa-check"></i> Monthly Status Reports</li>
     </ul>
     <button class="btn btn-primary">button</button>
</div>
</div>
);

}