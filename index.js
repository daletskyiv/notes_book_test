import{n as l}from"./assets/vendor-BY9c7rfI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function c(){return JSON.parse(localStorage.getItem("tasks"))}function u(e){const r=c()||[];r.push(e),localStorage.setItem("tasks",JSON.stringify(r))}const i={headerForm:document.querySelector(".header-form"),tasksList:document.querySelector(".tasks-list")},d=e=>{const r=e.map(({id:o,taskNameValue:n,taskDescriptionValue:t})=>`<li class="task-list-item">
      <button class="task-list-item-btn data-id=${o}">Delete</button>
      <h3>${n}</h3>
      <p>${t}</p>
  </li>`).join("");i.tasksList.innerHTML=r},m=({id:e,taskNameValue:r,taskDescriptionValue:o})=>{i.tasksList.insertAdjacentHTML("beforeend",`<li class="task-list-item">
      <button class="task-list-item-btn data-id=${e}">Delete</button>
      <h3>${r}</h3>
      <p>${o}</p>
  </li>`)};function f(e){e.preventDefault();const{taskName:r,taskDescription:o}=e.target.elements,n=r.value.trim(),t=o.value.trim();if(!n||!t)return;const s={id:l(),taskNameValue:n,taskDescriptionValue:t};u(s),m(s),e.target.reset}const p=()=>{const e=c();d(e)},k=e=>{e.target.nodeName==="BUTTON"&&console.log(e.target)};i.headerForm.addEventListener("submit",f);i.tasksList.addEventListener("click",k);document.addEventListener("DOMContentLoaded",p);
//# sourceMappingURL=index.js.map
