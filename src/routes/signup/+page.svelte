<script>
    let countdown = 15;
    let i = 1;
    let question = "question bruv";
    let option1 = "op1111";
    let option2 = "op2";
    let option3 = "op3333333";
    let option4 = "op4";
    let attempted = 0;
    let notattempted = 0;
    let cnt = 9;

    import roomimg from "../../assets/room.png";
    import ContestIcon from "../../lib/components/contestIcon.svelte";
    import quizend from "../../assets/quizend.gif";
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Exo&family=Kaisei+Tokumin:wght@500&family=Merriweather&family=Share+Tech+Mono&display=swap');
    #quizend {
        width: auto;
        height: 100%;
        object-fit: cover;
    }
</style>
{#if cnt>=11}
<div class="h-screen w-screen flex flex-row grow items-center bg-[#171717]">
    <div class="flex flex-col w-[50vw] h-screen items-center justify-center ">
        <img id="quizend" src={quizend} alt="cow" class="" />
    </div>
    <div class="grow flex flex-col h-screen items-center justify-center">
        <div class="w-[26.4vw] text-center text-cyan-100 text-6xl font-normal" style="font-family:'Share Tech Mono'">QUIZ HAS ENDED</div>
        <div class="text-center text-cyan-100 text-[2.08333vw] font-normal" style="font-family:'Share Tech Mono'">your results:</div>
        <div class="text-center text-white text-4xl font-normal" style="font-family:'Share Tech Mono'">questions attempted: {attempted}</div>
        <div class="text-center text-white text-4xl font-normal" style="font-family:'Share Tech Mono'">correct answers: {ans}</div>
        <div class="text-center text-white text-4xl font-normal" style="font-family:'Share Tech Mono'">questions unattempted: {notattempted}</div>
        {#if bothfinished==0 }
            <div class="text-center text-[#85BF7B] text-4xl font-normal" style="font-family:'Share Tech Mono'">WAITING FOR OPPONENT TO FINISH</div>
        {/if}

        {#if bothfinished==1 }
            <div class="text-center text-[#85BF7B] text-4xl font-normal" style="font-family:'Share Tech Mono'">BOTH PLAYERS HAVE FINISHED</div>
            {#if pname == name1}
                <div class="text-center text-white text-4xl font-normal" style="font-family:'Share Tech Mono'">your opponent has scored: {player2score}</div>
                {#if player2score>player1score}
                    <div class="text-center text-cyan-100 text-4xl font-extrabold" style="font-family:'Exo'">YOU LOSE!</div>
                {:else} 
                    <div class="text-center text-cyan-100 text-4xl font-extrabold" style="font-family:'Exo'">YOU WIN!</div>
                {/if}
            {/if}
            {#if pname == name2}
                <div class="text-center text-white text-4xl font-normal" style="font-family:'Share Tech Mono'">your opponent has scored: {player1score}</div>
                {#if player2score<player1score}
                    <div class="text-center text-cyan-100 text-4xl font-extrabold" style="font-family:'Exo'">YOU LOSE!</div>
                {:else} 
                    <div class="text-center text-cyan-100 text-4xl font-extrabold" style="font-family:'Exo'">YOU WIN!</div>
                {/if}
            {/if}
            <button type="button" class="btn btn-error btn-sm lowercase text-[1.75vw] w-[25vw]" style="font-family: 'Share Tech Mono';">GO BACK TO DASHBOARD</button>
        {/if}
    </div>
</div>  
{/if}