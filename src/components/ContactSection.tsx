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
          className="text-white text-sm sm:text-base lg:text-lg font-normal opacity-90"
          variants={itemVariants}
        >
          - Currently Exploring Exciting New Opportunities -
        </motion.p>

        <motion.div
          className="flex justify-center items-center gap-12 sm:gap-16 lg:gap-24"
          variants={containerVariants}
        >
          <motion.a
            href="mailto:your.email@example.com"
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
            </div>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:scale-110 transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
              <div className="absolute inset-0 bg-[#FF9937] rounded-full shadow-lg border-2 border-[#64392F] group-hover:border-4 group-hover:shadow-2xl transition-all duration-300" />
              <svg
                className="absolute inset-0 m-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.5833 6.25C40.6884 6.25 41.7482 6.68899 42.5296 7.47039C43.311 8.25179 43.75 9.3116 43.75 10.4167V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H39.5833ZM38.5417 38.5417V27.5C38.5417 25.6987 37.8261 23.9712 36.5524 22.6976C35.2787 21.4239 33.5513 20.7083 31.75 20.7083C29.9792 20.7083 27.9167 21.7917 26.9167 23.4167V21.1042H21.1042V38.5417H26.9167V28.2708C26.9167 26.6667 28.2083 25.3542 29.8125 25.3542C30.586 25.3542 31.3279 25.6615 31.8749 26.2084C32.4219 26.7554 32.7292 27.4973 32.7292 28.2708V38.5417H38.5417ZM14.3333 17.8333C15.2616 17.8333 16.1518 17.4646 16.8082 16.8082C17.4646 16.1518 17.8333 15.2616 17.8333 14.3333C17.8333 12.3958 16.2708 10.8125 14.3333 10.8125C13.3996 10.8125 12.504 11.1834 11.8437 11.8437C11.1834 12.504 10.8125 13.3996 10.8125 14.3333C10.8125 16.2708 12.3958 17.8333 14.3333 17.8333ZM17.2292 38.5417V21.1042H11.4583V38.5417H17.2292Z"
                  fill="#64392F"
                  fillOpacity="0.7"
                />
              </svg>
            </div>
          </motion.a>

          <motion.a
            href="/path-to-your-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:scale-110 transition-transform duration-300"
            variants={itemVariants}
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
              <div className="absolute inset-0 bg-[#FF9937] rounded-full shadow-lg border-2 border-[#64392F] group-hover:border-4 group-hover:shadow-2xl transition-all duration-300" />
              <svg
                className="absolute inset-0 m-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg=h-12"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 15.875C20.9 15.875 22.025 14.75 22.025 13.35C22.025 11.95 20.9 10.825 19.5 10.825C18.1 10.825 16.975 11.95 16.975 13.35C16.975 14.75 18.1 15.875 19.5 15.875Z"
                  fill="#64392F"
                  fillOpacity="0.7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.575 21.3751C24.575 18.6751 22.3 16.7251 19.5 16.7251C16.7 16.7251 14.425 18.6751 14.425 21.3751V22.6501C14.425 22.8751 14.525 23.1001 14.675 23.2501C14.825 23.4001 15.05 23.5001 15.275 23.5001H23.725C23.95 23.5001 24.175 23.4001 24.325 23.2501C24.475 23.1001 24.575 22.8751 24.575 22.6501V21.3751ZM14.375 28.7501C14.375 28.2528 14.5725 27.7759 14.9242 27.4243C15.2758 27.0726 15.7527 26.8751 16.25 26.8751H33.75C34.2473 26.8751 34.7242 27.0726 35.0758 27.4243C35.4275 27.7759 35.625 28.2528 35.625 28.7501C35.625 29.2474 35.4275 29.7243 35.0758 30.0759C34.7242 30.4276 34.2473 30.6251 33.75 30.6251H16.25C15.7527 30.6251 15.2758 30.4276 14.9242 30.0759C14.5725 29.7243 14.375 29.2474 14.375 28.7501ZM14.375 36.2501C14.375 35.7528 14.5725 35.2759 14.9242 34.9243C15.2758 34.5726 15.7527 34.3751 16.25 34.3751H33.75C34.2473 34.3751 34.7242 34.5726 35.0758 34.9243C35.4275 35.2759 35.625 35.7528 35.625 36.2501C35.625 36.7474 35.4275 37.2243 35.0758 37.5759C34.7242 37.9276 34.2473 38.1251 33.75 38.1251H16.25C15.7527 38.1251 15.2758 37.9276 14.9242 37.5759C14.5725 37.2243 14.375 36.7474 14.375 36.2501Z"
                  fill="#64392F"
                  fillOpacity="0.7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.25 6.25C6.25 3.495 8.495 1.25 11.25 1.25H27.975C29.38 1.25 30.705 1.845 31.6375 2.8275L31.6525 2.845L42.4325 14.6C43.33 15.5575 43.75 16.81 43.75 18V43.75C43.75 46.505 41.505 48.75 38.75 48.75H11.25C8.495 48.75 6.25 46.505 6.25 43.75V6.25ZM27.9725 6.25H11.25V43.75H38.75V17.98L28.01 6.2675L28.0025 6.265L27.9725 6.25Z"
                  fill="#64392F"
                  fillOpacity="0.7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.975 1.25C28.638 1.25 29.2739 1.51339 29.7427 1.98223C30.2116 2.45107 30.475 3.08696 30.475 3.75V15.5H41.25C41.5783 15.5 41.9034 15.5647 42.2067 15.6903C42.51 15.8159 42.7856 16.0001 43.0177 16.2322C43.2499 16.4644 43.434 16.74 43.5597 17.0433C43.6853 17.3466 43.75 17.6717 43.75 18C43.75 18.3283 43.6853 18.6534 43.5597 18.9567C43.434 19.26 43.2499 19.5356 43.0177 19.7678C42.7856 19.9999 42.51 20.1841 42.2067 20.3097C41.9034 20.4353 41.5783 20.5 41.25 20.5H27.975C27.3119 20.5 26.6761 20.2366 26.2072 19.7678C25.7384 19.2989 25.475 18.663 25.475 18V3.75C25.475 3.08696 25.7384 2.45107 26.2072 1.98223C26.6761 1.51339 27.3119 1.25 27.975 1.25Z"
                  fill="#64392F"
                  fillOpacity="0.7"
                />
              </svg>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
