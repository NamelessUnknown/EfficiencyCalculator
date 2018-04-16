using EfficiencyCalc.DAL;
using EfficiencyCalc.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EfficiencyCalc.Models.Repository
{
    public class PageCountRepo : IPageCountRepo
    {
        private readonly DatabaseContext _databaseContext;

        public PageCountRepo(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public int AddPageCount(PageCount pageCount)
        {
            if(pageCount == null)
            {
                throw new Exception("Page count cannot be null");
            }
            _databaseContext.PageCount.Add(pageCount);
            _databaseContext.SaveChanges();
            return pageCount.Id;
        }
        public List<PageCount> GetManyPageCounts()
        {
            return _databaseContext.PageCount.ToList();
        }

        public PageCount GetPageCount(int pageCountId)
        {
            if(pageCountId <= 0)
            {
                throw new Exception("Page Count ID cannot be less or equal to 0");
            }

            return _databaseContext.PageCount.Where(pageCount => pageCount.Id == pageCountId).FirstOrDefault();
        }

        public int UpdatePageCount(PageCount pageCount)
        {
            if (pageCount == null)
            {
                throw new Exception("Page count cannot be null");
            }

            _databaseContext.PageCount.Update(pageCount);
            _databaseContext.SaveChanges();
            return pageCount.Id;
        }

        public void DeletePageCount(PageCount pageCount)
        {
            if (pageCount == null)
            {
                throw new Exception("Page count cannot be null");
            }

            _databaseContext.PageCount.Remove(pageCount);
            _databaseContext.SaveChanges();

        }
    }
}
