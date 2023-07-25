const textarea = (
    <textarea 
        id={id}
        className={styles.input} 
        {...fieldProps} /> 
);

textarea.addEventListener("input", function(e){
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
})

return (
    {textarea}
)
