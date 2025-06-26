import { motion } from "framer-motion";

const ContactSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  return (
    <motion.section
      className="w-full bg-[#07033B] px-4 sm:px-8 lg:px-12 pt-16 lg:pt-20 pb-40 lg:pb-60"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h2
          className="text-white text-xl sm:text-2xl lg:text-3xl font-normal mt-12 lg:mt-16"
          variants={itemVariants}
        >
          Let&apos;s Work Together
        </motion.h2>

        <motion.p
          className="text-white text-sm md:text-base lg:text-lg font-normal opacity-90"
          variants={itemVariants}
        >
          - Currently Exploring Exciting New Opportunities -
        </motion.p>

        <motion.div
          className="flex justify-center items-center gap-12 sm:gap-16 lg:gap-24"
          variants={containerVariants}
        >
          <motion.a
            href="mailto:chan.li.yyc@gmail.com"
            className="group hover:scale-110 transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
              <div className="absolute inset-0 bg-[#FF9937] rounded-full shadow-lg border-2 border-[#64392F] group-hover:border-4 group-hover:shadow-2xl transition-all duration-300" />
              <svg
                className="absolute inset-0 m-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.16666 40.8334C7.04374 40.8334 6.0828 40.4339 5.28383 39.635C4.48486 38.836 4.08469 37.8744 4.08333 36.7501V12.2501C4.08333 11.1272 4.4835 10.1662 5.28383 9.36725C6.08416 8.56828 7.04511 8.16811 8.16666 8.16675H40.8333C41.9562 8.16675 42.9179 8.56691 43.7182 9.36725C44.5185 10.1676 44.918 11.1285 44.9167 12.2501V36.7501C44.9167 37.873 44.5172 38.8346 43.7182 39.635C42.9192 40.4353 41.9576 40.8348 40.8333 40.8334H8.16666ZM24.5 26.1845C24.6701 26.1845 24.8491 26.1586 25.037 26.1069C25.2248 26.0552 25.4031 25.9789 25.5719 25.8782L40.0167 16.8438C40.2889 16.6737 40.493 16.4614 40.6292 16.2068C40.7653 15.9523 40.8333 15.6712 40.8333 15.3636C40.8333 14.6831 40.5441 14.1727 39.9656 13.8324C39.3871 13.4921 38.7917 13.5091 38.1792 13.8834L24.5 22.4584L10.8208 13.8834C10.2083 13.5091 9.61284 13.5009 9.03437 13.8589C8.4559 14.2169 8.16666 14.7185 8.16666 15.3636C8.16666 15.7039 8.23472 16.002 8.37083 16.2579C8.50694 16.5138 8.71111 16.7091 8.98333 16.8438L23.4281 25.8782C23.5983 25.9803 23.7772 26.0572 23.9651 26.1089C24.1529 26.1606 24.3312 26.1858 24.5 26.1845Z"
                  fill="#64392F"
                  fillOpacity="0.7"
                />
              </svg>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-white text-sm md:text-base font-normal px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                Contact Me
              </span>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/chanlidev"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:scale-110 transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
              <div className="absolute inset-0 bg-[#FF9937] rounded-full shadow-lg border-2 border-[#64392F] group-hover:border-4 group-hover:shadow-2xl transition-all duration-300" />
              <svg
                className="absolute inset-0 m-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                viewBox="0 0 24 24"
                fill="#64392F"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillOpacity="0.7"
                  d="M12 0.296875C5.37109 0.296875 0 5.75391 0 12.25C0 17.6484 3.43359 22.1836 8.20703 23.7617C8.80469 23.8711 9.02344 23.5195 9.02344 23.2109C9.02344 22.9336 9.01172 22.207 9.00391 21.2031C5.67578 21.9062 4.96875 19.6797 4.96875 19.6797C4.42969 18.2461 3.66406 17.8594 3.66406 17.8594C2.60156 17.1172 3.74219 17.1367 3.74219 17.1367C4.90625 17.2227 5.53516 18.3438 5.53516 18.3438C6.57422 20.1094 8.26953 19.6172 9.00391 19.3125C9.11328 18.5664 9.41016 18.0391 9.73828 17.7422C7.09766 17.4414 4.33594 16.375 4.33594 11.6953C4.33594 10.3789 4.80078 9.29688 5.58203 8.45312C5.46094 8.14844 5.05469 6.89844 5.69141 5.19922C5.69141 5.19922 6.71094 4.87891 9.00391 6.35938C9.97266 6.07812 11.0156 5.93359 12.0586 5.92969C13.1016 5.93359 14.1445 6.07812 15.1172 6.35938C17.4023 4.87891 18.4219 5.19922 18.4219 5.19922C19.0625 6.89844 18.6562 8.14844 18.5352 8.45312C19.3203 9.29688 19.7812 10.3789 19.7812 11.6953C19.7812 16.3906 17.0156 17.4375 14.3672 17.7305C14.7852 18.0977 15.1602 18.8398 15.1602 19.9492C15.1602 21.5586 15.1406 22.8203 15.1406 23.2109C15.1406 23.5234 15.3555 23.8789 15.9609 23.7617C20.7305 22.1797 24 17.6484 24 12.25C24 5.75391 18.6289 0.296875 12 0.296875Z"
                />
              </svg>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-white text-sm font-normal px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                View Github
              </span>
            </div>
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1u2PSduLeA_JEZlm5XUPybMnv5VgzEg6T/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:scale-110 transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
              <div className="absolute inset-0 bg-[#FF9937] rounded-full shadow-lg border-2 border-[#64392F] group-hover:border-4 group-hover:shadow-2xl transition-all duration-300" />
              <svg
                className="absolute inset-0 m-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                viewBox="0 0 24 24"
                fill="#64392F"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillOpacity="0.7"
                  d="M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2H6ZM13 3.5L18.5 9H14C13.4477 9 13 8.55228 13 8V3.5ZM8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13ZM9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17C8 16.4477 8.44772 16 9 16Z"
                />
              </svg>
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-white text-sm font-normal px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                View Resume
              </span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
