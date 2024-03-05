const getCandidatesStatus = (state) => {
    switch (state) {
        case "joined":
            return "Ajouté";
        case "pending":
            return "En attente";
        case "accepted":
            return "Accepté(e)";
        case "rejected":
            return "Rejété(e)";
    }
}

const transformText = (text) => {
    let array = text.split(" ");
    return array.join("_").toLowerCase();
}

export default {
    getCandidatesStatus,
    transformText
}