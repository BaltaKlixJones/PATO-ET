import getProfessional from '../Controllers/Professional';

const professionalHanlders = {
    getProfessionals: async (req, res) => {
        try {
            const professionals = await Professional.findAll();
            return res.status(200).json(professionals);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}