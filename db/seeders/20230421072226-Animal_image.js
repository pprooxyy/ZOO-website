"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Animal_images",
      [
        { animal_id: 1, image_link: "/animals-photo/kit/kit_1.jpg" },
        { animal_id: 1, image_link: "/animals-photo/kit/kit_2.jpg" },
        { animal_id: 1, image_link: "/animals-photo/kit/kit_3.jpg" },
        { animal_id: 1, image_link: "/animals-photo/kit/kit_4.jpg" },
        { animal_id: 1, image_link: "/animals-photo/kit/kit_5.jpg" },
        { animal_id: 2, image_link: "/animals-photo/tiger/tiger_1.jpg" },
        { animal_id: 2, image_link: "/animals-photo/tiger/tiger_2.jpg" },
        { animal_id: 2, image_link: "/animals-photo/tiger/tiger_3.jpg" },
        { animal_id: 2, image_link: "/animals-photo/tiger/tiger_4.jpg" },
        { animal_id: 2, image_link: "/animals-photo/tiger/tiger_5.jpg" },
        { animal_id: 3, image_link: "/animals-photo/medved/medved_1.jpg" },
        { animal_id: 3, image_link: "/animals-photo/medved/medved_2.jpg" },
        { animal_id: 3, image_link: "/animals-photo/medved/medved_3.jpg" },
        { animal_id: 3, image_link: "/animals-photo/medved/medved_4.jpg" },
        { animal_id: 3, image_link: "/animals-photo/medved/medved_5.jpg" },
        { animal_id: 4, image_link: "/animals-photo/bars/bars_1.jpg" },
        { animal_id: 4, image_link: "/animals-photo/bars/bars_2.jpg" },
        { animal_id: 4, image_link: "/animals-photo/bars/bars_3.jpg" },
        { animal_id: 4, image_link: "/animals-photo/bars/bars_4.jpg" },
        { animal_id: 4, image_link: "/animals-photo/bars/bars_5.jpg" },
        { animal_id: 5, image_link: "/animals-photo/bober/bober_1.jpg" },
        { animal_id: 5, image_link: "/animals-photo/bober/bober_2.jpg" },
        { animal_id: 5, image_link: "/animals-photo/bober/bober_3.jpg" },
        { animal_id: 6, image_link: "/animals-photo/wolk/wolk_1.jpg" },
        { animal_id: 6, image_link: "/animals-photo/wolk/wolk_2.jpg" },
        { animal_id: 6, image_link: "/animals-photo/wolk/wolk_3.jpg" },
        { animal_id: 7, image_link: "/animals-photo/ej/ej_1.jpg" },
        { animal_id: 7, image_link: "/animals-photo/ej/ej_2.jpg" },
        { animal_id: 8, image_link: "/animals-photo/enot/enot_1.jpg" },
        { animal_id: 8, image_link: "/animals-photo/enot/enot_2.jpg" },
        { animal_id: 8, image_link: "/animals-photo/enot/enot_3.jpg" },
        { animal_id: 8, image_link: "/animals-photo/enot/enot_4.jpg" },
        { animal_id: 8, image_link: "/animals-photo/enot/enot_5.jpg" },
        { animal_id: 9, image_link: "/animals-photo/orel/orel_1.jpg" },
        { animal_id: 9, image_link: "/animals-photo/orel/orel_2.jpg" },
        { animal_id: 9, image_link: "/animals-photo/orel/orel_3.jpg" },
        { animal_id: 9, image_link: "/animals-photo/orel/orel_4.jpg" },
        { animal_id: 9, image_link: "/animals-photo/orel/orel_5.jpg" },
        { animal_id: 10, image_link: "/animals-photo/lis/lis_1.jpg" },
        { animal_id: 10, image_link: "/animals-photo/lis/lis_2.jpg" },
        { animal_id: 10, image_link: "/animals-photo/lis/lis_3.jpg" },
        { animal_id: 11, image_link: "/animals-photo/pisets/pisets_1.jpg" },
        { animal_id: 11, image_link: "/animals-photo/pisets/pisets_2.jpg" },
        { animal_id: 11, image_link: "/animals-photo/pisets/pisets_3.jpg" },
        { animal_id: 11, image_link: "/animals-photo/pisets/pisets_4.jpg" },
        { animal_id: 11, image_link: "/animals-photo/pisets/pisets_5.jpg" },
        { animal_id: 12, image_link: "/animals-photo/ris/ris_1.jpg" },
        { animal_id: 12, image_link: "/animals-photo/ris/ris_2.jpg" },
        { animal_id: 12, image_link: "/animals-photo/ris/ris_3.jpg" },
        { animal_id: 12, image_link: "/animals-photo/ris/ris_4.jpg" },
        { animal_id: 12, image_link: "/animals-photo/ris/ris_5.jpg" },
        { animal_id: 13, image_link: "/animals-photo/pchela/pchela_1.jpg" },
        { animal_id: 13, image_link: "/animals-photo/pchela/pchela_2.jpg" },
        { animal_id: 13, image_link: "/animals-photo/pchela/pchela_3.jpg" },
        { animal_id: 13, image_link: "/animals-photo/pchela/pchela_4.jpg" },
        { animal_id: 14, image_link: "/animals-photo/sova/sova_1.jpg" },
        { animal_id: 14, image_link: "/animals-photo/sova/sova_2.jpg" },
        { animal_id: 14, image_link: "/animals-photo/sova/sova_3.jpeg" },
        { animal_id: 14, image_link: "/animals-photo/sova/sova_4.jpg" },
        { animal_id: 15, image_link: "/animals-photo/soika/soika_1.jpg" },
        { animal_id: 15, image_link: "/animals-photo/soika/soika_2.jpg" },
        { animal_id: 15, image_link: "/animals-photo/soika/soika_3.jpg" },
        { animal_id: 15, image_link: "/animals-photo/soika/soika_4.jpg" },
        { animal_id: 15, image_link: "/animals-photo/soika/soika_5.jpg" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Animal_images", null, {});
  },
};
